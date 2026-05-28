'use client';

import DisplayLines from './DisplayLines';

const values = [
  { title: 'Trust', desc: 'The foundation of every partnership' },
  { title: 'Velocity', desc: 'Logistics at the speed of business' },
  { title: 'Connectivity', desc: 'Global network, local expertise' },
];

export default function CompanySection() {
  return (
    <section id="company" className="bg-canvas section-spacing">
      <div className="container-wide">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-6">Established 2014</p>
          <DisplayLines
            as="h2"
            lines={['Small Giant.', 'Big Impact.']}
            className="display-lg text-ink mb-8"
          />
          <p className="body-default text-muted max-w-2xl">
            As a dedicated GSSA, airline cargo representation is our core identity — not a
            side business. Backed by ECS Group, we rival companies many times our size through
            technical precision and local expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline panel-bordered mb-20">
          {values.map((item) => (
            <div key={item.title} className="bg-canvas px-10 py-10 md:px-12 md:py-12">
              <h3 className="headline text-ink mb-4">{item.title}</h3>
              <p className="body-default text-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center panel-quote px-12 py-12 md:px-16 md:py-14">
          <blockquote className="subhead text-ink mb-6">
            &ldquo;In logistics, every shipment carries not just cargo, but our clients&apos;
            trust and reputation.&rdquo;
          </blockquote>
          <cite className="eyebrow not-italic">CEO &amp; Founder</cite>
        </div>
      </div>
    </section>
  );
}
