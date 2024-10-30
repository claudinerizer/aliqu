let dist1 = new NormalDistribution(0, 1);
let dist2 = new BernoulliDistribution(0.5);
let weights = [0.3, 0.7];
let result = mixture$1([dist1, dist2], weights);
