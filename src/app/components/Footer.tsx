export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-3">Lorem ipsum</h3>
            <p className="text-sm text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Lorem ipsum</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Lorem ipsum</li>
              <li>Dolor sit amet</li>
              <li>Consectetur</li>
              <li>Adipiscing elit</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Lorem ipsum</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>lorem@ipsum.com</li>
              <li>+00 000 000 0000</li>
              <li>Lorem ipsum city</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          Lorem ipsum dolor sit amet, 2026.
        </div>
      </div>
    </footer>
  );
}
