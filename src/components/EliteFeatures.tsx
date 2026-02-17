import { Check } from 'lucide-react';
import { PRODUCT_INFO } from '../constants';
import Section from './Section';
import HexagonChart, { VERTICES } from './HexagonChart';

const LABEL_ALIGN = ['center', 'left', 'left', 'center', 'right', 'right'] as const;

const LABEL_TRANSFORM = [
  'translate(-50%, -120%)',
  'translate(10%, -50%)',
  'translate(10%, -50%)',
  'translate(-50%, 20%)',
  'translate(-110%, -50%)',
  'translate(-110%, -50%)',
];

const EliteFeatures = () => {
  const { eliteFeatures } = PRODUCT_INFO.sections;

  return (
    <Section className="bg-ivory overflow-hidden">
      <div className="text-center">
        <span className="text-sm font-bold tracking-widest text-brown-400 uppercase mb-2 block">
          MIRI EYEWEAR
        </span>
        <h3 className="text-3xl md:text-4xl font-serif text-brown-900 leading-tight whitespace-pre-line mb-20">
          {eliteFeatures.title}
        </h3>

        {/* Desktop — Hexagon */}
        <div className="relative max-w-xl mx-auto aspect-square hidden md:flex items-center justify-center">
          <HexagonChart />
       <div className="absolute w-44 h-44 rounded-full bg-white shadow-2xl flex items-center justify-center z-10 -translate-y-3">

            <img

              src="/eyewear-v2/images/Product.png"

              alt="MIRI Eyewear 제품 중심 이미지"

              className="w-28 h-28 object-contain"

            />

          </div>
          {/* Vertex dots */}
          <div className="absolute inset-0 z-10 pointer-events-none">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-white stroke-brown-600" strokeWidth="1">
              {VERTICES.map((v, i) => (
                <circle key={i} cx={v.x} cy={v.y} r="1.5" />
              ))}
            </svg>
          </div>

          {/* Labels */}
          <div className="absolute inset-0 pointer-events-none">
            {eliteFeatures.items.map((item, i) => (
              <div
                key={i}
                className="absolute z-20"
                style={{
                  left: `${VERTICES[i].x}%`,
                  top: `${VERTICES[i].y}%`,
                  transform: LABEL_TRANSFORM[i],
                  textAlign: LABEL_ALIGN[i],
                }}
              >
                <div className={`flex flex-col ${[0, 3].includes(i) ? 'items-center' : i < 3 ? 'items-start' : 'items-end'}`}>
                  <div className="w-6 h-6 border border-brown-300 bg-white flex items-center justify-center mb-1 shadow-sm">
                    <Check size={14} className="text-brown-600" />
                  </div>
                  <span className="bg-brown-600 text-white text-[10px] px-2 py-0.5 tracking-wider mb-1">
                    {item.en}
                  </span>
                  <span className="text-brown-900 font-bold text-base whitespace-nowrap">
                    {item.ko}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile — Grid */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {eliteFeatures.items.map((item, i) => (
            <div key={i} className="flex flex-col items-center p-4 bg-white border border-brown-100 rounded-lg">
              <Check size={16} className="text-brown-600 mb-2" />
              <span className="text-xs text-brown-400 font-bold tracking-widest mb-1">{item.en}</span>
              <span className="text-brown-900 font-bold">{item.ko}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default EliteFeatures;
