import { ThemeToggle } from '@vevit/design-system';

export const Stavy = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
    <div style={{ display: 'grid', justifyItems: 'center', gap: 8 }}><ThemeToggle theme="dark" /><small style={{ color: 'var(--vv-text-muted)', fontSize: 12 }}>tmavý (sluneční ikona)</small></div>
    <div style={{ display: 'grid', justifyItems: 'center', gap: 8 }}><ThemeToggle theme="light" /><small style={{ color: 'var(--vv-text-muted)', fontSize: 12 }}>světlý (měsíc)</small></div>
  </div>
);

export const VHlavicce = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, width: 380, padding: '10px 14px', border: '1px solid var(--vv-border)', borderRadius: 12, background: 'var(--vv-surface)' }}>
    <span style={{ fontWeight: 700, color: 'var(--vv-green)' }}>VeVit <span style={{ fontWeight: 400, color: 'var(--vv-text)' }}>Tools</span></span>
    <ThemeToggle theme="dark" />
  </div>
);
