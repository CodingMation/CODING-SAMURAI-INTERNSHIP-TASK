import React from "react";
const Portfolios = () => {
  const cardItem = [
    {
      id: 1,
      logo: "https://raw.githubusercontent.com/CodingMation/Todo-list-by-PHP/refs/heads/main/images/task_completed.jpg",
      name: "ToDo List",
      des: "A simple and functional task management web app built using PHP and MySQL.",
      // view: "https://github.com/CodingMation/Todo-list-by-PHP",
      repo: "https://github.com/CodingMation/Todo-list-by-PHP"
    },
    {
      id: 2,
      logo: "./codeEditor.jpg",
      name: "Code Editor",
      des: "An interactive and responsive code editor built using FontAwesome and CodeMirror.",
      view: "https://codingmation.github.io/CodeEditor/",
      repo: "https://github.com/CodingMation/codeEditor"
    },
    {
      id: 3,
      logo: "./home.jpg",
      name: "Food Recipe",
      des: "A sleek and responsive recipe browsing app built with React and Tailwind CSS.",
      view: "https://codingmation.github.io/food-recipe/",
      repo: "https://github.com/CodingMation/food-recipe"
    },
    {
      id: 4,
      logo: "https://raw.githubusercontent.com/CodingMation/SCT_WD_01/main/assets/md-img/home.jpg",
      name: "Landing Page",
      des: "A modern and fully responsive landing page created using HTML and Tailwind CSS.",
      view: "https://codingmation.github.io/SCT_WD_01/",
      repo: "https://github.com/CodingMation/SCT_WD_01"
    },
    {
      id: 5,
      logo: "https://raw.githubusercontent.com/CodingMation/SCT_WD_02/main/images/cal_2.jpg",
      name: "Calculator",
      des: "A responsive and interactive calculator built with HTML, Tailwind CSS, and JavaScript.",
      view: "https://codingmation.github.io/SCT_WD_02/",
      repo: "https://github.com/CodingMation/SCT_WD_02"
    }
  ];
  return (
    <>
      <div
        name="Portfolio"
        className="bg-white max-w-screen-2xl container mx-auto px-4 md:px-16 mt-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">My Portfolio</h1>
          <span className="underline font-semibold">Featured Project</span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 my-10">
            {cardItem.map(({ id, logo, name, des, view, repo }) => {
              return (
                <div
                  key={id}
                  className="md:w-[300px] md:h-[350px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
                >
                  <img
                    src={logo}
                    alt={name}
                    className="w-full h-1/2 p-1 rounded-md border-[2px]"
                  />
                  <div>
                    <div className="px-2 font-bold text-xl mb-2">{name}</div>
                    <p className="px-2 text-greay-700">
                      {des}
                    </p>
                  </div>
                  <div className="py-4 px-6 space-x-3 justify-around">
                    <a href={view} target="_blank">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                        View
                      </button>
                    </a>
                    <a href={repo} target="_blank">
                      <button className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md">
                        Source Code
                      </button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolios;
