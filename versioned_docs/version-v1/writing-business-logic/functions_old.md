---
sidebar_position: 13
title: Core Interfaces
---

In this, we cover some of the base interfaces of Godspeed runtime module. These will be widely used across entire Godspeed SDK.

> These interface definitions will be put under Apache 2 license so that our clients have no lockin with Godspeed, while enjoying the best of it!

---

## Type GSInstruction

A GSInstruction is a wrapper around actual business logic aka `function or action` or even another GSInstruction. This is a core building block of the Godspeed SDK modules, function DAG composition, and the proposed way of doing things from a flexibility, seperation of concern and dynamism point of view.

GSInstruction allows to wrap a set of checks and custom behavior before and after the actual action (an atomic action unit of the business logic). The actual function of a GSInstruction can be written in any language. Except for JS and TS, all other language functions are compiled to Webassembly and run on this framework. GSInstruction also has the finally clause to wrap up before returning from this instruction. Function DAG is also an Instruction comprising of set of Instructions recursively.

This `layered design` has following benefits

- **Separation of concern** Business logic is decoupled from authorizations, validations, auto instrumentation, auto exposing REST/Event interface etc. This can be plugged into any kind of microservice framework, including Godspeed.

- **Flexibility** It gives developer flexibility to implement different business flows around a common action. This can be across products, A/B tests or tenants. This is achieved by reusing core actions while decorating them with different pre and post hooks. For example

* Geo fencing
* API monetization
* Rate limiting
* Tenant specific payload validation

- **Dynamism:** The pre and post hooks of an Instruction can be dynamically updated (added or removed) by the program, `without restarting the service`.

- **Custom observability:** Add business metrices or any other signals.

#### GSInstruction Constructor

```
    name: String,
    preAuthHooks?: [GSInstruction] // Auto telemetry, custom business logic, pre-loading.
    auths?: [GSAssert] //RBAC/ABAC/JWT
    onAuthError?:[GSAction] // What to do on error in auths
    validations?: [GSAssert | GSL] //GSL when parsed, its command should be implemented via a GSAssert interface
    onValidationsError?:[GSAction] // What to do on error in validations
    preFunctionHooks: [GSAction]
    onPreFunctionHooksError?:[GSAction]  // What to do on error in  PreFunctionHooks
    _function: [GSAction]
    onFunctionError?:[GSAction] //What to do on error in _functions
    postFunctionHooks?: [GSAction] //To act upon error, or success cases.
    finally?: [GSAction]
```

#### GSInstruction.execute()

    // Arguments
    ctx: GSContext,
    params: JSON

#### GSReturn

```
    res: GSResponse //On successful execution
    error: GSError //On Error
    events: [GSEvent] //Any events that happened when the instruction was running, in order of occurence. Usefor for Business Process Monitoring.
```

---

## Type: GSError

```
    code: //An error code extending the standards
    message: String
    stack: [String]//Stack trace
    errors: [GSError]
```

---

## Type: GSResponse

```
    code: //A GS error code extending the standards
    message: String
    data: Any object or data type
```

---

## Type GSContext

The GSContext includes all the context specific information like tracing information, actor, environment, headers, payload, shared state (if this ctx is shared with other instruction threads, this part can be shared with them), immutable state (personal copy, personal view, for concurrency)

**A context has the following properties**

```
    data: Any object or data type //All memoized data with shared references. References can have promises or actual data. This is not concurrency safe.
    immutable: Any object or data type //For storing and accessing references which are unique to this execution context (for concurrency safety, in the functional programming way).
    actor: String //JWT and other user specific info
    headers: Object //In case there were any headers with the payload in messagebus or in HTTP
    payload: Object //The arguments to include in this function
    otel: Any object or data type //OTEL compliant trace/span information
```

---

## Type: GSAssert extends GSInstruction

This is typically a condition check that matches a condition against given data or data promise.

    ctx: GSContext
    data: JSON | GSDataFetch // Internally GSAssert invokes GSDataFetch.getData() and applies the pass/fail condition to it.
    condition: [GSCondition] // to run on the data, evaluating to true or false.

#### Returns

##### On successful assertion

A GSResponse instance with following data
pass: true | false

##### On error

It return a GSError instance

---

## Type GSDataFetch extends GSInstruction

GSDataFetch.invoke() data or promise of it.

GSDataFetch can be

- a DB/cache fetch instruction
- a file fetch instruction
- HTTP fetch instruction (Own or third party API)
- Data federation instruction
- Any kind of a function which returns some data

---

## Type GSCondition

A GSCondition interface is a function which evaluates to true or false, when supplied with `context` and `data`
This condition can be

- GSInstruction
- A TS/JS function
- JSON schema instruction
