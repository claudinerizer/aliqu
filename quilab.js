class Operations {
    constructor() {
        this.specifications = [];
    }

    add(spec, op) {
        // Assume spec is an object and op is a function
        this.specifications.push({ spec, op });
    }

    executeAll() {
        this.specifications.forEach(({ spec, op }) => {
            console.log(`Executing operation '${op.name}' with specification:`, spec);
            op(spec);
        });
    }
}

// Example usage
let operations = new Operations();

function operation1(spec) {
    console.log("Operation 1 performed with spec:", spec);
}

function operation2(spec) {
    console.log("Operation 2 performed with spec:", spec);
}

operations.add({ name: "Spec 1" }, operation1);
operations.add({ name: "Spec 2" }, operation2);

operations.executeAll();
