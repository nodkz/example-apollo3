import { default as nextGetConfig } from 'next/config';

/**
 * Get config value by its name
 *   from `serverRuntimeConfig` which available only on server-side
 *   then from `publicRuntimeConfig` which avaliable on both server-side and client-side
 */
export function getConfig(name: string) {
  const nextConfigs = (nextGetConfig() as any) || {};
  const cfgPrivate = nextConfigs.serverRuntimeConfig ?? {};
  const cfgPublic = nextConfigs.publicRuntimeConfig ?? {};
  return cfgPrivate[name] || cfgPublic[name];
}
