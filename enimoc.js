function createShape(is2D) {
    return {
        type: is2D ? 'area' : 'rect',
        // Other properties specific to the shape...
    };
}

// Example usage:
const shape1 = createShape(true);  // Creates a 2D shape
console.log(shape1);  // Outputs: { type: 'area', ... }

const shape2 = createShape(false);  // Creates a non-2D shape
console.log(shape2);  // Outputs: { type: 'rect', ... }
