import Section from './Section';

const IMAGES = [
  { src: '/eyewear-v2/images/eyewear_1.jpg', alt: 'MIRI 선글라스 컬렉션' },
  { src: '/eyewear-v2/images/eyewear_2.jpg', alt: 'MIRI 선글라스 스타일링' },
  { src: '/eyewear-v2/images/eyewear_3.jpg', alt: 'MIRI 선글라스 제품 디테일' },
];

const Gallery = () => (
  <Section className="bg-ivory">
    <div className="flex justify-center items-center gap-8 md:gap-16">
      {IMAGES.map((img, i) => (
        <div
          key={i}
          className="w-48 h-48 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-brown-200 shadow-lg"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      ))}
    </div>
  </Section>
);

export default Gallery;
