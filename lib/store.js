// Persistencia simple en localStorage (sin base de datos).

export const K = {
  profile: 'pudu_profile',
  interests: 'pudu_interests',
  connections: 'pudu_connections',
  visits: 'pudu_visits',
};

const hasWindow = () => typeof window !== 'undefined';

export function load(key, fallback) {
  if (!hasWindow()) return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) {
    return fallback;
  }
}

export function save(key, value) {
  if (!hasWindow()) return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    /* almacenamiento no disponible */
  }
}

export function toggleInArray(key, id) {
  const arr = load(key, []);
  const next = arr.includes(id) ? arr.filter((x) => x !== id) : [...arr, id];
  save(key, next);
  return next;
}

export function addToArray(key, id) {
  const arr = load(key, []);
  if (arr.includes(id)) return arr;
  const next = [...arr, id];
  save(key, next);
  return next;
}
