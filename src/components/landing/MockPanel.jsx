import React from 'react';

// Renders the inner body of a dashboard mock: a row of metrics plus one of
// three visualizations (bars / rows / flow). `mock` is a decorate()'d object.
export default function MockPanel({ mock, barsHeight = 132 }) {
  return (
    <>
      <div style={{ display: 'flex', gap: 34, marginBottom: 20, flexWrap: 'wrap' }}>
        {mock.metrics.map((m, i) => (
          <div key={i} style={{ animation: `floatNum 5s ease-in-out ${m.d} infinite` }}>
            <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-.02em', color: m.c }}>{m.v}</div>
            <div style={{ fontSize: 10.5, color: '#9a9a94' }}>{m.l}</div>
          </div>
        ))}
      </div>

      {mock.isBars && (
        <>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: barsHeight, borderBottom: '1px solid #eeeee9' }}>
            {mock.bars.map((c, i) => (
              <div key={i} style={{ flex: 1, height: `${c.h}%`, background: c.bg, borderRadius: '2px 2px 0 0', transformOrigin: 'bottom', animation: `barGrow .7s cubic-bezier(.2,.7,.3,1) ${c.d} backwards` }} />
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9.5, color: '#b4b4ae', paddingTop: 8, fontFamily: 'monospace' }}>
            <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
          </div>
        </>
      )}

      {mock.isRows && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {mock.rows.map((r, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto minmax(70px, auto)', gap: 16, alignItems: 'center', padding: '10px 0', borderTop: '1px solid #f0f0eb', fontSize: 11.5, animation: `rowIn .5s ease ${r.d} backwards` }}>
              <span style={{ color: '#444440', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.a}</span>
              <span style={{ fontSize: 10, padding: '2px 9px', borderRadius: 999, background: r.pillBg, color: r.pillFg }}>{r.pill}</span>
              <span style={{ color: '#9a9a94', fontFamily: 'monospace', fontSize: 10, textAlign: 'right' }}>{r.b}</span>
            </div>
          ))}
        </div>
      )}

      {mock.isFlow && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', padding: '22px 0' }}>
          {mock.stages.map((st, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, animation: `rowIn .5s ease ${st.d} backwards` }}>
              <div style={{ border: `1px solid ${st.border}`, background: st.bg, color: st.fg, borderRadius: 8, padding: '8px 11px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 11, fontWeight: 600 }}>{st.t}</span>
                <span style={{ fontSize: 9, fontFamily: 'monospace', color: st.subC }}>{st.sub}</span>
              </div>
              {st.arrow && <span style={{ color: '#c9c9c4', fontSize: 12, animation: `pulseDot 1.6s ease-in-out ${st.d} infinite` }}>→</span>}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
