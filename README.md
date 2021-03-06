This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Tutorial video
[YouTube-React JS Crash Course-2019](https://www.youtube.com/watch?v=sBws8MSXN7A)

### 1. 兩種函式呼叫方式

Function 可利用 props 傳遞 `this.functionName.bind(this,id)`
```jsx
markComplete(e){
    console.log(this.props);
  }
<input type="checkbox" onChange={this.markComplete.bind(this)} />{' '}
```

```jsx
markComplete=(e)=>{
    console.log(this.props);
  }
<input type="checkbox" onChange={this.markComplete} />{' '}
```

傳遞數值
```jsx
  markComplete = (id) => {
    console.log(id);
  }
<input type="checkbox" onChange={this.markComplete.bind(this,1)} />{' '}
```
若在函式call()內呼叫傳值函式時不需要 `bind`
```jsx
  markComplete = (id) => {
    console.log(id);
  }
  call = (){
    this.markComplete(id);
  }
<input type="checkbox" onChange={this.call} />{' '}
```


### 2. status
#### 建立
建立在 `render()` 上面，當作 Class 的全域變數。

```jsx
state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: true
      },
      {
        id: 2,
        title: 'Clean my house',
        completed: false
      }
    ]
  }
```

#### 修改
此方法利用 `map` 修改 `Object` 內的值。

```jsx
this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
```

### 3. Props
Props 就好比 HTML 標籤中的屬性可以傳遞變數或函式

```jsx
// App.js
<Todos todos={this.state.todos} />

// Todos.js
const todos = this.props.todos;  // 可以使用map依序讀裡面物件將每個子項目渲染(TodoItem)
```

### 4. 變數建立位置

- Function 箭頭函式
放置在 `Class` 類別全域變數中

- Style 樣式變數
建立 Style 可以用物件型態變數包起來一樣放在 `Class` 類別全域變數中

總結： 只要是變數都必續擺放在 `Class` 最外層，例如函式、樣式變數


### 5. Router

```bash
yarn add react-router-dom
```

最外層用 `Router` 包起來，接著使用 `Route` 分別對個別的路徑做設定與初始化，如果裡面有很多個元件可以使用 `render` 的函式渲染所有的元件。若只有一個元件可以使用 `component` 渲染。此外主 `Router` 的 `exact` 關鍵字可以避免其他路徑也去吃到 root 的內容。

```jsx
import { BrowserRouter as Router,Route} from 'react-router-dom'


<Router>
  <div className="App">
    <div className="container">
      <Header />
      <Route exact path="/" render={props=>(
        <React.Fragment>
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </React.Fragment>
      )}/>
      <Route path="/about" component={About}/>
    </div>
  </div>
</Router>

```


RCG 建立 React Function
RCE 建立 React Class


### deploy to GitHub page
Install the gh-pages package as a "dev-dependency" of the app. 

```bash
yarn add gh-pages
```

Add some properties to the app's package.json file. 

```json
//...
"homepage": "http://ReactXLab.github.io/react-todo-list",
"scripts": {
    "deploy": "gh-pages -d build"
  }
```


