export const Home = () => {
  return (
    <div className="font-sans">
      {/* Home Section */}
      <section id="home" className="text-center p-16 bg-pink-50">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="text-4xl font-semibold text-pink-700 mb-6">
            Welcome to My Personal Page
          </h1>
          <video
            className="w-[200px] flex justify-center"
            width="640"
            height="360"
            autoPlay
            muted
            loop
          >
            <source src="/jennifer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I’m a passionate individual who loves to explore, learn, and grow.
            Here, you’ll find more about my experiences, hobbies, family, work,
            and dreams. Join me on this journey!
          </p>
          <a
            href="#about"
            className="bg-pink-600 text-white py-2 px-6 rounded-full hover:bg-pink-700 transition duration-300 transform hover:scale-105"
          >
            Learn More About Me
          </a>
        </div>
      </section>

      {/* A Little About Me Section */}
      <section id="about" className="p-16 bg-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-pink-700 mb-6">
            🌎 A Little About Me
          </h2>
          <div className="flex flex-col md:flex-row">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/08/17/15/disney-world-978134_1280.jpg"
              alt="Travel Image"
              className="mx-auto w-[300px] rounded-lg shadow-lg mb-4 transition transform hover:scale-105"
            />
            <img
              src="https://media.istockphoto.com/id/1266305627/photo/beach-in-santa-marta-colombia.jpg?s=2048x2048&w=is&k=20&c=cQ5yzsCBr7U1ZGfu5iGZgaaF5J8NKhwIXo2QbJrwd0s="
              alt="Travel Image"
              className="mx-auto w-[300px] rounded-lg shadow-lg mb-4 transition transform hover:scale-105"
            />
          </div>
          <div className="mb-6"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            I love traveling and discovering new places. I’ve had the
            opportunity to visit Miami and Orlando, Florida, where I fully
            enjoyed the amazing Disney World theme parks. I’ve also explored the
            beautiful beaches of Santa Marta and Cartagena, two charming
            destinations on Colombia’s Caribbean coast. I'm a Barranquilla
            native at heart, but I currently live in Medellín, a city that has
            inspired me and warmly welcomed me.
          </p>
        </div>
      </section>

      {/* My Hobbies and Interests Section */}
      <section id="hobbies" className="p-16 bg-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-pink-700 mb-6">
            🌟 My Hobbies and Interests
          </h2>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/10/57/girl-1838605_960_720.jpg"
            alt="Travel Image"
            className="mx-auto w-[300px] rounded-lg shadow-lg mb-4 transition transform hover:scale-105"
          />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In my free time, I really enjoy riding my bike, an activity that
            helps me stay active and clear my mind. I also like spending time
            with my family and watching videos on the internet, especially those
            that teach me new things or inspire me. I’m currently studying
            Advertising Development at SENA, and my goal is to apply that
            knowledge to develop my own business in the future.
          </p>
        </div>
      </section>

      {/* My Personal Life Section */}
      <section id="personal-life" className="p-16 bg-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-pink-700 mb-6">
            💖 My Personal Life
          </h2>
          <img
            src="https://cdn.pixabay.com/photo/2017/08/08/03/50/family-2610205_1280.jpg"
            alt="Travel Image"
            className="mx-auto w-[300px] rounded-lg shadow-lg mb-4 transition transform hover:scale-105"
          />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I believe in God and I am a Christian, values that guide me every
            day. I’m married, and my family consists of my husband and our
            beautiful daughter, who are my greatest source of love, strength,
            and motivation.
          </p>
        </div>
      </section>

      {/* My Work Experience Section */}
      <section id="work-experience" className="p-16 bg-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-pink-700 mb-6">
            💼 My Work Experience
          </h2>
          <img
            src="https://cdn.pixabay.com/photo/2024/05/11/11/04/call-center-8754751_1280.jpg"
            alt="Travel Image"
            className="mx-auto w-[300px] rounded-lg shadow-lg mb-4 transition transform hover:scale-105"
          />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Although I’m studying, I currently work as a call center advisor. I
            assist customers from a Spanish company, which means I usually work
            overnight shifts, helping resolve home service issues. This job has
            taught me to be responsible, empathetic, and skilled in customer
            communication.
          </p>
        </div>
      </section>

      {/* My Goals and Dreams Section */}
      <section id="goals" className="p-16 bg-pink-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-pink-700 mb-6">
            🌱 My Goals and Dreams
          </h2>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/14/03/38/achieve-1822503_960_720.jpg"
            alt="Travel Image"
            className="mx-auto w-[300px] rounded-lg shadow-lg mb-4 transition transform hover:scale-105"
          />
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I have many goals and dreams I wish to achieve. I’m fully committed
            to my personal and professional growth, and I truly believe that
            with dedication, passion, and most importantly, with God’s help, I
            will make all of them come true.
          </p>
        </div>
      </section>

      {/* Evidence Explanation Section */}
      <section id="evidence" className="p-16 bg-pink-50">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-pink-700 mb-6">
            📘 Different evidence developed in English
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I attached a mind map as evidence for the activity
            GA5-240202501-AA1-EV02. In this mind map, I present the information,
            tools, and network of contacts I use to stay updated and
            continuously learn in both my professional and personal life. This
            comprehensive approach to lifelong learning and staying current
            allows me to achieve my goals, improve my skills, and be prepared
            for the challenges of today’s world. The tool I used to create the
            mind map was Canvas, due to its wide range of creative options.
          </p>
          <img
            src="/mapaMental.jpg"
            alt="Travel Image"
            className="mx-auto w-[600px] rounded-lg shadow-lg mb-4 transition transform hover:scale-105"
          />

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In the evidence GA3-240202501-AA2-EV02, I present a video showcasing
            a tourist spot where I talk about and show a bit of my hometown,
            Barranquilla. I develop an oral presentation in English that
            describes my region, highlighting its location, characteristics, and
            reasons for its popularity. This activity aims to improve fluency
            and pronunciation in English, as well as the ability to organize and
            present information clearly and coherently. On this occasion, I also
            used the Canvas tool because I enjoy its wide variety of templates,
            which allow me to let my imagination run free.
          </p>
          <video
            className="w-[600px] flex justify-center"
            width="640"
            height="360"
            autoPlay
            muted
            loop
          >
            <source src="/VIDEOTURISTICO.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            In test GA2-240202501-AA1-EV02, I talk about a real person: my
            husband. I describe aspects of his personality, his daily routine,
            and some of his accomplishments, giving an overview of who he is. To
            complete this task, I used the Canvas tool because I enjoy the
            variety of creative options it offers.
          </p>
          <video
            className="w-[600px] flex justify-center"
            width="640"
            height="360"
            autoPlay
            muted
            loop
          >
            <source src="/presentacion.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};
