### You can use cookie like local-storage.

```js
// install with npm 
npm install am-local-storage
```

## Usage

```js
import localCookie from 'am-local-cookie';

//Set cookie
localCookie.set(key:string,value,expire_day:number,path:string);

//Get cookie
localCookie.get(key);

//Remove cookie
localCookie.remove(key);
```

## Usage with Require 

```js
import localCookie from 'am-local-cookie';

//Set cookie
localCookie.set(key:string,value);

//Get cookie
localCookie.get(key);

//Remove cookie
localCookie.remove(key);
```

## Example

```js
import localCookie from 'am-local-cookie';

//Set cookie
localCookie.set("name","Ali Mortazavi",60,"/");

//Get cookie
localCookie.get("name"); //Ali Mortazavi

//Remove cookie
localCookie.remove("name");
```

## Features

- Very fast
- Very easy