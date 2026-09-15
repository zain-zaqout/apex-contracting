// Verified Pexels photo IDs — all resolve to HTTP 200.
const px = (id, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const images = {
  // Hero — dramatic building under construction with tower crane at dusk
  hero: px(34911458, 1920),
  // Why Us — architect/engineer reviewing blueprints at construction site
  architect: px(9405517, 1100),
  // Service card images — professional, cohesive set with consistent tone
  sCommercial: px(18710790, 800),
  sResidential: px(31737860, 800),
  sProjectMgmt: px(8961008, 800),
  sFitout: px(34538286, 800),
  // Projects — consistent set: all modern architecture, warm-lit exteriors & interiors
  p1: px(31737860, 900),
  p2: px(18710790, 900),
  p3: px(34538286, 900),
  p4: px(30781823, 900),
  p5: px(19515360, 900),
  p6: px(36175674, 900),
  // Success Stories — executive portraits (CEO / company president)
  exec1: px(37469200, 600),
  exec2: px(34529440, 600),
  // Avatars
  a1: px(30004323, 200),
  a2: px(12311567, 200),
  a3: px(30124371, 200),
};

export const serviceImages = [
  images.sCommercial,
  images.sResidential,
  images.sProjectMgmt,
  images.sFitout,
];
