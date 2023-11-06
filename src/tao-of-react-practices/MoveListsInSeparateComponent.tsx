interface Article {
  id: number;
  name: string;
}

interface MoveListsInSeparateComponentPropTypes {
  articles: Article[];
}

const ARTICLES: Article[] = [
  {
    id: 1,
    name: "Article One",
  },
  {
    id: 2,
    name: "Article Two",
  },
  {
    id: 3,
    name: "Article Three",
  },
];

const ArticlesList = ({ articles }: MoveListsInSeparateComponentPropTypes) => {
  return articles.map((article: Article, i: number) => (
    <h1 key={i}>{article.name}</h1>
  ));
};

const MoveListsInSeparateComponent = () => {
  return (
    <div style={{border: '1px solid green' ,marginTop: '20px'}} >
        <h1>Articles:</h1>
      <ArticlesList articles={ARTICLES} />
    </div>
  );
};

export default MoveListsInSeparateComponent;
