import Head from 'next/head'

export default function Home() {
  return (
    <>
      <div className="flex justify-between p-8">
        <h1 className="">
          <img src="/images/logo.png" className="max-h-8" />
        </h1>
        <div>
          <ul className="flex space-x-4">
            <li>Login</li>
            <li>Signup</li>
          </ul>
        </div>
      </div>

      <div className="container max-w-screen-lg mx-auto px-4">
        <div className="flex items-center flex-col sm:flex-row space-x-4 mb-12">
          <div className="flex-1">
            <img src="/images/top.png" className="mx-auto" />
          </div>
          <div className="py-8">
            <h2 className="text-2xl sm:text-5xl font-bold mb-4">毎月1冊、読書が続く。</h2>
            <p className="text-gray-500 text-lg sm:text-lg mb-6">
              honyenは、毎月1冊おすすめの本が近くの図書館に届く<br />
              図書館を活用した読書習慣化サービスです。
            </p>
            <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 max-w-md rounded py-3 text-white text-center">
              無料で試してみる
            </div>
          </div>
        </div>

        <div className="full-bleed bg-stripe relative mb-12">
          <div className="container max-w-screen-lg mx-auto text-center py-4">
            <h3>honyenなら、ムリせず毎月1冊の読書が続きます</h3>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row space-x-8">
          <div className="flex-1 bg-shadow bg-white relative h-24 border-2 border-gray-700"></div>
          <div className="flex-1 bg-shadow bg-white relative h-24 border-2 border-gray-700"></div>
          <div className="flex-1 bg-shadow bg-white relative h-24 border-2 border-gray-700"></div>
        </div>
      </div>

      <style jsx>{`
        .full-bleed {
          width: 100vw;
          margin-left: 50%;
          transform: translateX(-50%);
        }
        .bg-stripe {
          background-image:
            repeating-linear-gradient(
              -45deg,
              #f0f0f0, #f0f0f0 5px,
              rgba(0 0 0 / 0) 0,
              rgba(0 0 0 / 0) 10px
            );
        }
        .bg-shadow::before {
          content: "";
          position: absolute;
          bottom: -10px;
          right: -10px;
          width: 100%;
          height: 100%;
          background-image:
            radial-gradient(#999 30%, transparent 31%),
            radial-gradient(#999 30%, transparent 31%);
          background-size: 6px 6px;
          background-position: 0 0, 3px 3px;
          z-index: -1;
        }
      `}</style>
    </>
  )
}
