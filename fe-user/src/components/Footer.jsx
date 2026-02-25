export default function Footer() {
  return (
    <div className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-4 gap-12">

        <div>
          <h3 className="text-white font-bold mb-4 text-lg">
            Book Haven
          </h3>
          <p className="text-sm">
            Nền tảng quản lý và mua bán sách hiện đại.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">
            Sản phẩm
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Mua sách</li>
            <li>Mượn sách</li>
            <li>Đặt chỗ</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">
            Hỗ trợ
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Liên hệ</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">
            Kết nối
          </h4>
          <p className="text-sm">
            Facebook • Instagram • Email
          </p>
        </div>

      </div>
    </div>
  );
}