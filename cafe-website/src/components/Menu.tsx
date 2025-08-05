import React from 'react';

const Menu: React.FC = () => {
  const menuItems = [
    {
      id: 1,
      name: 'ブレンドコーヒー',
      description: '当店自慢のオリジナルブレンド。深いコクと豊かな香りをお楽しみください。',
      price: '¥480',
      category: 'ホットドリンク'
    },
    {
      id: 2,
      name: 'カフェラテ',
      description: 'エスプレッソにスチームミルクを加えた、まろやかな味わいの一杯。',
      price: '¥580',
      category: 'ホットドリンク'
    },
    {
      id: 3,
      name: 'チーズケーキ',
      description: '濃厚でなめらかな口当たり。コーヒーとの相性抜群です。',
      price: '¥680',
      category: 'デザート'
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cafe-dark-brown mb-4 font-japanese">
            人気メニュー
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            厳選した素材と丁寧な手作りにこだわった、自慢のメニューをご紹介します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-cafe-beige rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-cafe-light-brown flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-cafe-brown mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    {item.category === 'ホットドリンク' ? (
                      <path d="M2,21V19H20V21H2M20,8V5L18,5V8C18,10.28 16.19,12 14,12C11.81,12 10,10.28 10,8V5H8V8C8,11.37 10.69,14.1 14,14.1C17.31,14.1 20,11.37 20,8M3,3V5H21V3H3Z" />
                    ) : (
                      <path d="M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z" />
                    )}
                  </svg>
                  <p className="text-cafe-dark-brown text-sm font-medium">{item.category}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-cafe-dark-brown font-japanese">
                    {item.name}
                  </h3>
                  <span className="text-cafe-brown font-bold text-lg">
                    {item.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-cafe-brown hover:bg-cafe-dark-brown text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            全メニューを見る
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;