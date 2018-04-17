# ptah-by-react

## 背景

公司 ptah 系统1.1版的基于 React 的 UI 框架（暂且认为是框架吧），真正去写才发现很难，还有好多要学习和实践的地方。
由于是公司框架，就不做多介绍。

## Usage

### Search

￼￼![Alt text](https://github.com/Caleboy/ptah-by-react/new/master/)

```html
<Search placeholder="姓名/工號/CW￼R號"/>
```

```html
<Search
   placeholder="姓名/工號/CWR號"
   width="200"
   position="left"
/>
```

```html
<Search
   placeholder="輸入內容"
   width="250"
   onSearch={(value) => this._searchHandle(value)}
 />
```

### Select

```html
<Select onSelect={(value) => this._selectHandle(value)}>
   <Option>111</Option>
   <Option>222</Option>
   <Option>333</Option>
</Select>
```

```html
<Select
    mode="tags"
    onSelect={(value) => this._selectHandle(value)}
    size='big'
    prefix={<i><img src={require('../images/down-01.png')} alt=""/></i>}
 >
    <Option>111</Option>
    <Option>222</Option>
    <Option>333</Option>
    <Option>444</Option>
    <Option>555</Option>
    <Option>666</Option>
    <Option>777</Option>
    <Option>888</Option>
</Select>
```

### DatePicker

```html
<DatePicker />
```

### Icon

```html
<Icon/>
<br/>
<Icon className="icon-search"/>
<br/>
<Icon type="search" spin={true}/>
```


### Button


```html
<Button>button</Button>
<br/>
<Button type="primary">Primary</Button>
<br/>
<Button type="default">Default</Button>
<br/>
<Button type="disabled">Disabled</Button>
```
