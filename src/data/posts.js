import { nauruDeportationDeal } from './posts/nauru-deportation-deal.js';
import { nzyqHumanRightsCase } from './posts/nzyq-human-rights-case.js';
import { restrictedProBono } from './posts/restricted-pro-bono.js';

export const posts = [
    nauruDeportationDeal,
    nzyqHumanRightsCase,
    restrictedProBono,
].sort((a, b) => new Date(b.date) - new Date(a.date));
