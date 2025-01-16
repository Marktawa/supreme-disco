Used Gitpod

Installed Strapi

```
? Please log in or sign up. Skip
? Do you want to use the default database (sqlite) ? Yes
? Start with an example structure & data? Yes
? Start with Typescript? Yes
? Install dependencies with npm? Yes
? Initialize a git repository? No
```

Switched from Node 22 to Node 20 using nvm

Reinstalled Strapi using Node 20

Command to install Strapi
```
npx create-strapi@latest
```

Installed Strapi with the following settings:
```
? Please log in or sign up. Skip
? Do you want to use the default database (sqlite) ? Yes
? Start with an example structure & data? No
? Start with Typescript? No
? Install dependencies with npm? Yes
? Initialize a git repository? No
```

Registered Admin user with:
User name: John Doe
Password: JohnDoe1

```
curl localhost:1337/api/books?filters\[authors\][hobby][$contains]=dance > test1.json
```

```
curl localhost:1337/api/books?filters%5Bauthors%5D%5Bhobby%5D%5B%24contains%5D=dance > test2.json
```

```
curl --globoff localhost:1337/api/books?filters\[authors\][hobby][$contains]=dance > test3.json
```

```bash
curl localhost:1337/api/dance-books > test4.json
```

```bash
curl localhost:1337/api/dance-books > test5.json
```