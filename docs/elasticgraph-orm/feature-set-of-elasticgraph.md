---
sidebar_position: 3
title: Feature, Configurations & API
---

# About ElasticGraph
## Benifits

### Productivity
EG saves LOT of effort in development of an Elasticsearch based app because it *abstracts some most common data operations into a simple configurable abstractions* saving hundreds to thousand lines of code, makes the code neat, elegantly abstracts business logic in configurable text files and saves many hours of development and testing.

### Performance
Using ElasticGraph one can configure and run (out of the box) highly scalable microservices using *relational graph approach, optimized for storing and querying large informational graphs in greater depth and complexity.*

The node module internally uses **intelligent query batching and in memory caching**, to support thousands of concurrent users, and complex search and analytic graph queries.

## Features
* Supports relationships
* Joins
	* You can do this for upto multiple depths of relationships in an easy fashion.
* Graph search and aggregations (using denormalization + caching)
	* Graph search: Find friends whose friends are from India.
	* Graph aggrigations: Give countwise breakup of users across city.state.country.name property
* Dependency management between data of related entities (At indexing time).
	* Sometimes the value of some field of an entity depends on the value of another field in (possibly) another entity related to it.
	* Example unions and copy values. More on it below.
	* Here you can configure such dependencies through configuration.
* Multi lingual storage and read operations
    * You can store, retrieve and search text fields in any languages
	* Any new language support can be added though a simple configuration
* Easy SQL
	* English like (or easy) query language is a custom DSL built to richly express queries in a very small and handy syntax, easily human readable.
	* Write complex database operation logic in "very few lines"
	* You (almost) don't need to be a developer to grasp it :-)
* Performance features
	* Query batching
		* EG collects and executes, multiple queries from different places in your application logic, as one bulk query to your datastores.
		* Saves typical throughput time in high load scenario
	* In memory caching
		* Check and store queries and entities in an in-memory cache. This cache is internally populated and used during execution of EG’s deep API.
		* Saves N -1 round trips to the database for every N queries.
		* Developers can use this feature via EG’s npm module, to keep alive and share a cache object as long as they want for performance optimisation.


## Entities and model

In ElasticGraph (EG) domain, there are entities (similar to rows in MySQL, or nodes in a Graph). Each entity has an id, type, fields like text, date etc. and relationships (akin to foreign keys). The configurations of a field are all declared in one place.

Each entity is stored in a separate ElasticSearch index by the name entity._type + ‘s’

For example. for type video, the ES index will be videos


**The simple fields of an entity and their settings are defined in**

Here is a sample config for 'event' entity type in TOML format

```yaml title=configFolder/schema/entities/{entityType}.toml
[title]
type = 'String'
multiLingual = true
autoSuggestion = true
encrypted = true
sort = true # Mark this field to be index as sortable or searchable
[description]
type = 'String' # String | Boolean | Number(stored as Long) | Object | Date
multiLingual = true
[startingDate]
type = 'date'
multiLingual = false
```
:::info
If you want to use `type = Float` then you need to specify in [custom-mappings.yaml](/docs/elasticgraph-orm/elasticgraph.md#custom-elasticsearch-mapping)

:::

Corresponding document of an Event, when returned from the API will look like shown below. It does not matter which underlying database the information is being fetched from.

```json
{
  "_index": "events",
  "_type": "event",
  "_id": "294464",
  "_version": 4,
  "found": true,
  "_source": {
    "startingDate": 489004200000,
    "tibetan": {
      "description": "\nལ་དཱགས་མི་མང་ནས་ཇི་ལྟར་གསོལ་བ་འདེབས་པ་བཞིན་༧སྤྱི་ནོར་༧གོང་ས་སྐྱབས་མགོན་\n\nཆེན་པོ་མཆོག་ནས་ནང་ཆོས་ངོ་སྤྲོད་སྩལ་།",
      "title": "Sample event"
    },
    "english": {
      "description": "His Holiness the Fourteenth Dalai Lama gives an introduction on basic Tibetan Buddhism in Ladakh.",
      "title": "པོ་མཆོག་ནས་ནང་ཆོས་ངོ་སྤྲོད་སྩལ"
    }
  }
}
```


The data model you set is used to generate the appropriate mappings for ES. This way, EG can be used to automatically create schema in ES.

### Field Encryption and Search in ElasticGraph

Protecting sensitive data is crucial in any application. ElasticGraph offers a powerful feature that allows encryption of specific fields mentioned in the TOML file of the schema. This ensures the confidentiality and integrity of sensitive information stored in your database.

Furthermore, ElasticGraph enables search functionality on encrypted fields in their plaintext form. To achieve this, ElasticGraph utilizes the robust SHA-256 algorithm for deterministic encryption.

For example, if you want to encrypt a mobile number field, you can easily achieve this by simply adding the line `encrypted = true` in the corresponding TOML file.

```yaml
[mobileNumber]
type ="String"
sort = true
encrypted = true
```

## Relationships

You must define the relationships of your data model in `configFolder/schema/relationships.txt`.

The format for specifying relationships in relationship file is

```text
relationNameFromAToB <> relationNameFromBToA
entityTypeA <> entityTypeB //One to one
relationNameFromAToB <> relationNameFromBToA
[entityTypeA] <> entityTypeB //Many to one
relationNameFromAToBs <> relationNameFromBToA
entityTypeA <> [entityTypeB] //One to many
relationNameFromAsToBs <> relationNameFromBsToAs
[entityTypeA] <> [entityTypeB] //many to many
```
*As you can see, when an entity type is surrounded by square brackets [], it means cardinality of many*

:::tip
It is compulsory to maintain relationship name both ways, from Entity A to B, and B to A.* This is so that one can express Graph traversal from both sides.
:::


Some examples
```
speakers <> events
[event] <> [speaker]
sessions <> event
event <> [session]
```

### Linking entities via relation

```js
	es.deep.link({
		e1: {
			_type: ‘event’,
			_id: ‘674’
		},
		e2: {
			_type: session,
			_id: 4
		},
		e1ToE2Relation: ‘sessions’
	})
	.then(console.log)
```

### Un-linking entities via relation

```js
	es.deep.unlink({
		e1: {
			_type: ‘event’,
			_id: ‘674’
		},
		e2: {
			_type: session,
			_id: 4
		},
		e1ToE2Relation: ‘sessions’
	})
	.then(console.log)
```

## Graph Search and Graph analytics

**We use denormalisation to make it fast**
> Settings configFolder/joins/index.txt

Imagine you have a database composed of events, speakers and persons.

And, you wish to do the following two queries.
* Search events by speakers.person.name
* Show countwise breakup of search results on events, based on speakers.person.name (like on ecommerce sites)

> If your tables have only the foreign keys, you will have to do multiple hits to implement such cross table queries. And they will be slow. Depending on your data size, this may take a long long time before the final query result is returned. Also, your database will most probably get under heavy load.

*With ElasticGraph you can denormalize based on simple rule setting and achieve the same result with a single hit to the database. *

By denormalizing (always ensuring latest copy of) the speaker.person.name information within the event object, *during index, update, link or unlink calls*.



How does this work?

By denormalizing (always ensuring latest copy of) the speaker.person.name information within the event object, *during index, update, link or unlink calls*.

For example, here is how ‘event’ may look like in denormalization settings (in the file joins/index.txt)

```yaml
[event]
sessions{title, description}
speakers.person{name}
```

Based on your configuration ElasticGraph works to automatically maintain the denormalised storage of speaker and session data in the event entities. Y
** You only need to link or unlink two entities by a relationship. Everything else is taken care by ElasticGraph. **

#### Maintenance of the denormalised graph state

Here are some scenarios in which the automatic denormalization will trigger in our example database.

* Whenever you update the name of a person, the events where he or she spoke, will also get updated with person’s new name.

* When you index (store) the event for first time in the database, and it contains speakers ids, the speaker’s name will also get copied inside the event entity as it gets stored/indexed.

* When the event is linked to a speaker, the speaker’s name will get copied inside the event entity

* When the event is unlinked from a speaker, the speaker’s id, name etc will get removed from the event entity



#### The Butterfly effect

As you just saw, any update can potentially create a ripple update across entire Graph, for maintaining correct data state as per the denormalisation and also the data dependency rules like union and copy (more on the latter below).

Since this is handled internally by ElasticGraph, it saves the developer from the overhead of maintaining a consistent, denormalised graph state across all updates. His code doesn’t need to save the updated field value at multiple places in the database- a big overhead, lots of confusing code, more bugs... Instead, he simply declares the behavior just once, in a human readable way. After that he leaves it to ElasticGraph to do all the internal bookkeeping to upkeep a correct denormalised graph state all the time.

In ElasticSearch and also in popular SQL stores, we can make use of the JSON style storage and do the joins within one document. In comparison to SQL way of rows, the document way of ES saves storage space and helps in faster analytics also. Have a look at how the denormalized speakers relationship is stored within an ElasticGraph event document.

```json
{
  "_index": "events",
  "_type": "event",
  "_id": "294464",
  "_version": 4,
  "found": true,
  "_source": {
    "speakers": [
      {
        "_id": "c6c35e3b21815a4209054505ac5e1680a954efdf",
        "own": true,
        "fields": {
          "person": {
            "_id": "1",
            "_version": 1,
            "fields": {
              "english": {
                "name": "His Holiness the 14th Dalai Lama"
              },
              "tibetan": {
				  "name" : "ང་ས་སྐུ་ཕྲེང་བཅུ་བཞི་"
			  }
            }
          }
        }
      }
    ]
  }
}
```

## Data dependency implementation

> Note: This strategy is perhaps best applied in write less and read more scenarios.

In many data models, data of an entity in your graph may depend on the data of other related entities. For ex. if a married woman has a new child, the husband also has a new child. And vice versa.

ElasticGraph gives you an easy way to manage complex data dependencies between related entities of your information graph. As any update is made to any Entity in your Graph, ElasticGraph checks if any part of the remaining Graph should be updated by this change as per your data model settings. If yes, it updates the entire affected Graph (Butterfly effect).

For now EG supports two kinds of dependencies - Union from and Copy.

*  **Union from**
> Settings are in configFolder/schema/union.toml

Union from operation can be used to compute and store distinct values, whether relationships or data values, merged from field values of multiple related entities.

This is useful for one to many or many to many relationships. Please look at the following examples to understand.

```yaml
[conference]
speakers = '+talks.speaker' #As soon as a talk is linked to a conferece, or an already linked talk gets linked to a speaker, *the talk’s speaker is also linked to the conference as one of its speakers, if not already linked before*. Vice versa happens if the talk is unlinked to its speaker, or the talk is removed from the conference
topics = '+talks.topics' #As soon as a talk is linked to an conference, or a topic is set to an already linked talk, the talk’s topic is also added to the conference as one of its topics, if not already there. Vice versa happens if the talk is unliked to the conference, or the topic is removed from the talk.
[‘person’]
grandChildren = +‘children.children’ #Whenever a person’s child gets a new child, the new child gets added to the person’s grandchildren
[‘folder’]
fileTypes = ‘+childFolders.fileTypes +childFiles.type’ #Calculate union of all file types existing in the entire folder tree (recursively). Anytime, any file gets added to any child folder in this tree, the type of that file gets unioned with the list of fileTypes of that child folder, and all its parent folders up in the hierarchy.
```

*  **Copy**
> Settings are in configFolder/schema/union.toml

Currently the copy functionality is achieved from within the union configuration.

This is effective for many to one or one to one relations. For ex.

```yaml
[person]
child = "+wife.child +husband.child" #This will ensure copy of child between husband and wife, whenever child is added to any one of the person entities
[file]
permissions = "+folder.permissions" #Whenever a folder’s permissions are updated the underlying files’ permissions are updated automatically. You can still manually override them, without affecting the folder. But whenever the folder’s permissions are updated again, the file’s permissions will get overwritten.
```

## **Read time joins**

This is helpful to create multiple views on the fly, during read time joins

Two ways to specify read time joins:

*  **Approach A:** Create a file in joins folder, and send the name of the file in the JSON query.
	> Settings folder: configFolder/joins
	* For read time joins, you specify name of a join configuration file stored in configFolder/joins. You can specify different joins for same entity in different contexts like read, search etc. The particular view can be referred by the ${filename} in your code.
	* Ex. read.txt or search.txt. You can create multiple such files and refer them
	* Sample configuration in text file (Same as denormalization settings in joins/index.txt)
	```
		[event]
		sessions{title, description}
		speakers.person{name}
		speakers.primaryLanguages{name}
	```

*  **Approach B:** Send the view (join) info in the query as JSON object

	* This gives developer the flexibility to create any views on the fly.

	* Example joins for user who lives in a city belonging to a state

	```json
		{
			"joins": {
			"name": 1,
			"city.name": 1,
			"city.state.name": 1,
			"city": { // Same effect as above two lines
				"name": 1,
				"state": {
					"name": 1
				}
			}
		}
		}
```

Sample API calls

```js
	deep.get({_id:1, _type: ‘event’ , joins: ‘read’});
	deep.get({
		_id:1,
		_type: ‘event’ , joins: {
		"name": 1,
		"city.name": 1,
		"city.state.name": 1
		}}
	);
	deep.search({
		_id:1,
		_type: ‘event’ ,
		query: {"match": {“speakers.person.english.name”: “Dalai Lama”}},
		joins: ‘search’
	})
```

The joined response is returned in same structure as the denormalization join you saw just above. *You can apply joins across any relation depth.*

For read time joins, you specify name of a join configuration file stored in configFolder/joins. You can specify different joins for same entity in different contexts like read, search etc. The joined response is returned in same structure as the denormalization join you saw just above. *You can apply joins across any relation depth.*

## **Multi Linguality**
> Settings file: configFolder/common.toml.

In that set, `supportedLanguages = [‘english’ , ‘tibetan’, ‘thirdLanguage’]`

If your data is in a single language or is language agnostic, then supportedLanguages = []

The fields which are declared multilingual, are stored like this in the _source of the entities.

~~~
"english": {
	"name": "His Holiness the 14th Dalai Lama"
},
"tibetan": {
	"name": "ྋགོང་ས་སྐུ་ཕྲེང་བཅུ་བཞི་པ།"
}
~~~




When creating, updating, searching or getting an entity, you have to specify the full path of every field, including its language. In search and get calls, you specify langs parameter, for the languages in which the data is to be fetched. By default data in all supported languages is fetched.





## **Easy SQL**





English like SQL to get lot of data work done - fast and easy. Even non-programmers can easily learn to do complex work over big data using this.





One can use ESQL for working with EG entities or even pure ES indices.





Its main features are



* Get much done with very less lines of code.

* Much elegant way compared to equivalent Javascript code.





It supports





* Search, get, index, link, unlink, delete.





* Creation of variables and assignment of values. Numbers string, boolean, objects supported





* If/else operations



* break, continue

* Print log



* Looping over array - Async each parallel



* Useful for scanning over a search result or entire index and doing operations.

* Loops can be nested within each other

* Mixing pure JS functions as instructions of the script when the script can not handle the complexity of logic





The grammar of dsl engine is in the source code of ElasticGraph npm. lib/dslEngine/grammar.pegjs



To run the a single statement in EQL you call eg.dsl.execute(statement).

To execute a whole script you call eg.dsl.runScripts(script)

```js
const fillSpeakersTranslatorsAndLinkWithEvent = [
	'iterate over old-contents where {$exist: event_id} as old-content. Get 25 at a time. Flush every 5 cycles. Wait for 100 millis',
	[
		'get event *old-content.event_id',
		'if *event is empty, display "empty event", *old-content.event_id',
		'if *event is empty, stop here',
		'search old-content-to-audio-channel where {content_id: *old-content._id} as cac',
		'async each *cac.hits.hits as old-content-to-audio-channel'
		[
			'get old-audio-channel *old-content-to-audio-channel.audiochannel_id as old-audio-channel', //No need to mention _source or fields. Both places, including top level object will be checked for existence of audiochannelId field
			'search first person where {_id: *old-audio-channel.speaker_id} as person.', //Creates person in index if not found there. Also sets person entity viz id+type as key in ctx.data, query as key with value being result in ctx.data
			//Handle event.speakers/translators. This guy is either a speaker or a translator. Set the relevent linking
			//Initializer
			'roleType is speaker if *old-audio-channel.translation_type is empty. Else is translator',
			'roleFeatures are {person._id: *old-audio-channel.speaker_id, primaryLanguages._id: *old-audio-channel.language_id}',
			//Can include pure JS functions within the script also
			(ctx) => {
				//TODO fix this 'roleFeatures.translationType is *old-audio-channel.translation_type if *roleType is translator.',
				if (ctx.get('roleType') === 'translator') {
				const translationType = ctx.get('old-audio-channel')._source.translation_type
				ctx.get('roleFeatures').translationType = translationType
				}
				return ctx
			},
			'search first *roleType where *roleFeatures as speakerOrTranslator. Create if not exists.',
			'if *speakerOrTranslator is empty, display "empty speaker", *roleFeatures, *roleType',
			'if *speakerOrTranslator is empty, stop here',
			(ctx) => {
				const speaker = ctx.get('speakerOrTranslator')
				const speakerBody = speaker._source || speaker.fields
				const pmName = _.get(_.first(speakerBody.primaryLanguages), 'fields.english.name')
				if (_.isObject(pmName)) {
					debug('throw stopHere error to break the loop', JSON.stringify(speaker))
					throw new Error('stopHere')
				}
			},
			//'display *roleType, *speakerOrTranslator._id, *roleFeatures',
			'link *speakerOrTranslator with *event as events',
		],
	],
	(ctx) => debug('Done ' + n++ + ' iterations')
];
//Now run the script
eg.dsl.execute(fillSpeakersTranslatorsAndLinkWithEvent);
```

## **Performance features**





There are two internal feature which stand behind the awesome performance of ElasticGraph - Collect and Cache.





### Collect





A typical program, during runtime, sends multiple queries to the database from different places. In case of using ES from NodeJS, each query entails an HTTP hit. Each such hit is an overhead on the system. Both to the Nodejs client and the ES cluster.





This feature allows you to save this overhead to achieve greater system speed and performance. Using this you can collect multiple queries and when a specified timeout or batch size threshold is reached, you send them to ES *as a single bulk request*. You can collect multiple queries from any parts of your middle ware.
```js
     es.{methodName}.collect({methodParams})
```
> Sample settings in configFolder/collect.toml

```yaml
[batchSizes]
msearch = 200
index = 200
mget = 200
get = 200
search = 200
bulk = 200
[timeouts] #in milliseconds
index = 30
get = 30
bulk = 30
mget = 30
msearch = 30
search = 30
```


*Each type of query is collected in a batch till any one of the batchSize threshold or the timeout threshold is reached.*

The supported es methods are get, mget, search, msearch, bulk and index.
For ex. es.get.collect({_id:..,_type:..}).then()


*The deep functions and esql scripts of EG internally use this feature.* This feature is available as part of the npm module.


### Cache

In the deep EG operations, a cache is used like a temporary EG index in memory. Hit to ES for each get/search query is done only once. After that each retrieved entity or document, and search result, is kept in the in memory store. Further, the graph update operations are also done in memory. Once the time to flush the updated graph to ES has come, one can call cache.flush()
All the in-memory-updated entities will be written to ES indices, and all cache data will be cleared.

## **Limitations**

Currently it does not support transactions or authorization (as of today)

ElasticSearch also does not provide transactions or acidity. In EG, since a single update also updates rest of the graph, but first in memory, and then altogether flushed into ElasticSearch, it is possible that another process may have updated a part of updated graph in meantime. If so flushing of this subgraph update will throw an error because someone already updated part of the subgraph before. This will lead to a partial subgraph update.

When using EG for denormalisation and dependency management, one has to be OK with possible errors in maintenance of the graph state.* If you need strict ACID behavior in your application, its best to use a transactional database as your primary datastore and use ES as your secondary datastore for read/search/analytic queries at scale and speed.*
> Soon EG, will provide both kind of data store support out of the box.

## **Deep API**

You can find the API and docs in the CRUD folder of the Postman collection shared [here](https://app.swaggerhub.com/apis/M4195/ElasticGraph/1.0.0)

> A full API doc shall be made soon.

## **Summing it up**

This project started with the .collect() feature sometime in 2015, from there it has evolved to include the deep API, denormalization, esql and other features. And now it is expanding to become a very powerful full fledged Microservice Platform. We have catered to four clients so far, and also built our own admin panel using the same.

Built with deep thought from the Himalayas.