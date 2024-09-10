const Page404 = () => {
  return (
    <section className="flex items-center h-screen justify-center bg-red">
      <div className="text-center">
        <div
          className="bg-cover bg-center h-[400px] w-full"
          style={{
            backgroundImage:
              "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
          }}
        >
          <h1 className="text-[80px] font-bold text-gray-800">404</h1>
        </div>
        <div className="mt-[-50px]">
          <h3 className="text-2xl font-bold">Looks like you are lost</h3>
          <p className="text-lg text-gray-600">
            The page you are looking for is not available!
          </p>
          <a
            href="/"
            className="mt-4 inline-block px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Go to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default Page404;
