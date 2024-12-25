let modified = false;
// ... (some code to initialize the "roots" data structure)

// Run the optimizer and update "modified" if any changes are made
modified = runOptimizer(new MergeTimeUnits(), roots) || modified;

// After the optimizer runs, check if any modifications were made
if (modified) {
    console.log('Modifications were made. Further iterations may be necessary.');
} else {
    console.log('No modifications were made. Optimization complete.');
}
