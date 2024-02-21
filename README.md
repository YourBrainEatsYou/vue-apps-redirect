# vue-apps-redirect

## usage in router (per route)

```js
{
  ...
  redirect: '/github/YourBrainEatsYou/vue-apps-redirect' // 👈  prefixed routes link to github
},
```

## catch all

```js
// ✨ the  magic happens here
{
  path: '/github/:pathMatch(.*)*', // 👈  catch all github routes
  name: 'redirectToGithub',

  beforeEnter: (to) => {
    const path = Array.isArray(to.params.pathMatch)
      ? to.params.pathMatch.join('/')
      : to.params.pathMatch;

    // redirect to github
    window.location.href = new URL(`/${path}`, 'https://github.com/').href;

    return false;
  },
},
```
