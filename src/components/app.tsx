import Header from "./header";

const App = ({ initialData }) => {

      return (
            <div className="container">
                  <Header message="Naming Contests" />

                  <div className="contest-list">
                        {initialData.contests.map((contest) => {
                              return (
                                    // eslint-disable-next-line react/jsx-key
                                    <div className="contest-preview">
                                          <div className="category">{contest.categoryName}</div>
                                          <div className="contest">{contest.contestName}</div>
                                    </div>
                              )
                        })}
                  </div>
            </div>
      );
};

export default App;