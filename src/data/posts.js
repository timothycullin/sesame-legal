import { nauruDeportationDeal } from './posts/nauru-deportation-deal.js';
import { nzyqHumanRightsCase } from './posts/nzyq-human-rights-case.js';

export const posts = [
    nauruDeportationDeal,
    nzyqHumanRightsCase,
].sort((a, b) => new Date(b.date) - new Date(a.date));
