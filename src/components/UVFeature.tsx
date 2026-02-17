import { Sun } from 'lucide-react';
import { PRODUCT_INFO } from '../constants';

const UVFeature = () => {
  const { uv } = PRODUCT_INFO.sections;

  return (
    <section className="py-24 md:py-36 bg-brown-900 text-ivory">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="relative overflow-hidden aspect-square max-w-md mx-auto">
              <img
               src="/eyewear-v2/images/sunshine.png"
                alt="UV400 렌즈를 통해 본 선명한 시야"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-ivory/30 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-3xl font-light">UV400</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <Sun className="w-8 h-8 text-brown-600 mb-6" />
            <h3 className="text-3xl md:text-4xl font-serif mb-6">{uv.title}</h3>
            <p className="text-brown-100/80 text-lg leading-relaxed whitespace-pre-line mb-10">
              {uv.subtitle}
            </p>

            <ul className="space-y-6">
              {uv.features.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 border-t border-brown-600/30 pt-4">
                  <span className="block w-1.5 h-1.5 rounded-full bg-brown-600 mt-2.5 shrink-0" />
                  <span className="text-brown-100/90 font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UVFeature;
