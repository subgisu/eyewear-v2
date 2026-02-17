import { Feather } from 'lucide-react';
import { PRODUCT_INFO } from '../constants';
import Section from './Section';

const Weight = () => {
  const { weight } = PRODUCT_INFO.sections;

  return (
    <Section className="bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-sand/10 skew-x-12 transform origin-top-right" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-16">
       <div className="w-full md:w-1/2 md:pl-20 lg:pl-30">
          <div className="inline-flex items-center gap-2 border border-brown-200 rounded-full px-4 py-1 mb-8">
            <Feather size={16} className="text-brown-600" />
            <span className="text-xs tracking-widest uppercase text-brown-600">Ultra Light</span>
          </div>

          <h3 className="text-5xl md:text-7xl font-light text-brown-900 mb-6">25g</h3>
          <p className="text-xl text-brown-800 font-medium mb-12">{weight.subtitle}</p>

          <div className="space-y-12">
            {weight.features.map((feature) => (
              <div key={feature.id} className="flex gap-6 group">
                <span className="text-brown-300 text-sm font-serif italic pt-1 group-hover:text-brown-600 transition-colors">
                  0{feature.id}.
                </span>
                <p className="text-brown-600 leading-relaxed whitespace-pre-line">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-brown-900/5 transform translate-x-4 translate-y-4" />
            <img
           src="/eyewear-v2/images/stylishwoman.png"
              alt="25g 초경량 선글라스 착용 이미지"
              className="relative w-full max-w-md grayscale hover:grayscale-0 transition-all duration-700 ease-in-out shadow-xl"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Weight;
