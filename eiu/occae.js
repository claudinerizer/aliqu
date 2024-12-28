    class CoreNormalizer extends SpecMapper {
        constructor() {
            super(); // Call the constructor of the parent class (SpecMapper)
            // Additional initialization code for CoreNormalizer
        }

        normalize(data) {
            // Method to normalize data
            console.log('Normalizing data in CoreNormalizer:', data);
        }

        // Optionally override methods from the parent class
        mapSpec(spec) {
            // Custom implementation for mapping a specification
            console.log('Mapping spec in CoreNormalizer:', spec);
        }
    }
    