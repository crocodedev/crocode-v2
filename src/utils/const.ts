export const MODELS = {
  CROSS: { url: '/models/cross.glb', name: 'CROSS' },
  CYLYNDRE_WITH_PLANE: {
    url: '/models/cylynder-with-plane.glb',
    name: 'CYLYNDRE_WITH_PLANE',
  },
  FLUTED_PIPE: {
    url: '/models/fluted-pipe.glb',
    name: 'FLUTED_PIPE',
  },
  HOLLOW_PLANET: { url: '/models/hollow-planet.glb', name: 'HOLLOW_PLANET' },
  MARSHMALLOW: { url: '/models/marshmallow.glb', name: 'NARSGNAKKIW' },
  PLANET: { url: '/models/planet.glb', name: 'PLANET' },
  ROGUE: { url: '/models/rogue.glb', name: 'ROGUE' },
} as const;

export const ROUTES = [
  { name: 'Home', link: '/test' },
  { name: 'Services', link: '/test1' },
  { name: 'Portfolio', link: '/test2' },
  { name: 'Technologies', link: '/test3' },
  { name: 'About us', link: '/test4' },
  { name: 'Blog', link: '/test5' },
  { name: 'Contact us', link: '/test6' },
] as const;
