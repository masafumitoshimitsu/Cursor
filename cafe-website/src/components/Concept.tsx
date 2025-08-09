import React from 'react';

const Concept: React.FC = () => {
  return (
    <section className="py-20 bg-cafe-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div className="order-2 lg:order-1">
            <div className="aspect-w-4 aspect-h-3 bg-cafe-light-brown rounded-lg shadow-lg flex items-center justify-center">
              <div className="text-center p-8">
                <svg className="w-24 h-24 text-cafe-brown mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.5,2A1.5,1.5 0 0,1 20,3.5V5H22V7H20V18.5A1.5,1.5 0 0,1 18.5,20H5.5A1.5,1.5 0 0,1 4,18.5V7H2V5H4V3.5A1.5,1.5 0 0,1 5.5,2H18.5M18,5H6V18H18V5M8,7H16V9H8V7M8,11H16V13H8V11M8,15H13V17H8V15Z" />
                </svg>
                <p className="text-cafe-dark-brown font-medium">カフェの温かい雰囲気</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl font-bold text-cafe-dark-brown mb-6 font-japanese">
              私たちのコンセプト
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                忙しい日常の中で、ほっと一息つける場所。それが私たちCafé Serenityの願いです。
              </p>
              <p>
                厳選された豆から淹れる一杯のコーヒーには、丁寧に時間をかけた職人の技と想いが込められています。
                木の温もりを感じる店内で、ゆったりとした時間をお過ごしください。
              </p>
              <p>
                お一人でも、大切な人とでも。あなたにとって特別なひとときを、私たちがお手伝いいたします。
              </p>
            </div>
            <div className="mt-8">
              <button className="bg-cafe-brown hover:bg-cafe-dark-brown text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                店舗について詳しく
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Concept;