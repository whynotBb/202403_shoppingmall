## 2024-03-27~ shopping mall project

git : https://github.com/whynotBb/202403_shoppingmall
netlify : https://202403-shoppingmall.netlify.app/

## library

-   https://www.npmjs.com/package/react-router-dom
    npm i react-router-dom

-   json-server
    npx json-server --watch db.json --port 5000

-   my json server : https://my-json-server.typicode.com/

## memo

파라미터 가져오기
let {id} = useParams();

query 값 가져오기 => 사용 : query.get('@')
const [query, setQuery] = useSearchParams();
