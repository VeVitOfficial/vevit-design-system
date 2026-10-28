import { Icon, iconNames } from '@vevit/design-system';

export const Sada = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 96px)', gap: 12, color: 'var(--vv-text)' }}>
    {iconNames.map((n) => (
      <div key={n} style={{ display: 'grid', justifyItems: 'center', gap: 8, padding: '14px 4px', border: '1px solid var(--vv-border)', borderRadius: 10, background: 'var(--vv-surface)' }}>
        <Icon name={n} size={24} />
        <span style={{ fontFamily: 'var(--vv-font-mono)', fontSize: 11, color: 'var(--vv-text-muted)' }}>{n}</span>
      </div>
    ))}
  </div>
);

export const BarvyAVelikosti = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
    <Icon name="wrench" size={16} style={{ color: 'var(--vv-c-tools)' }} />
    <Icon name="gamepad" size={24} style={{ color: 'var(--vv-c-games)' }} />
    <Icon name="graduation" size={32} style={{ color: 'var(--vv-c-edu)' }} />
    <Icon name="layers" size={48} style={{ color: 'var(--vv-c-services)' }} />
  </div>
);
