# web

### nextjs

1. middleware.js

   函数`middleware`表示在页面加载前会进行操作的函数

   `config` 对象定义了中间件的配置。`matcher` 数组定义了中间件应该匹配的 URL 模式。在这个例子中，中间件会跳过所有以 "_next" 开头的内部路径，只处理其他路径。

   ```javascript
   let locales = ["en", "zh"];
   
   // Get the preferred locale, similar to the above or using a library
   function getLocale(request) {
     return "en";
   }
   
   export function middleware(request) {
     // Check if there is any supported locale in the pathname
     const { pathname } = request.nextUrl;
     const pathnameHasLocale = locales.some(
       (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
     );
   
     if (pathnameHasLocale) return;
   
     // Redirect if there is no locale
     const locale = getLocale(request);
     request.nextUrl.pathname = `/${locale}${pathname}`;
     // e.g. incoming request is /products
     // The new URL is now /en-US/products
     return Response.redirect(request.nextUrl);
   }
   
   export const config = {
     matcher: [
       // Skip all internal paths (_next)
       "/((?!_next).*)",
       // Optional: only run on root (/) URL
       // '/'
     ],
   };
   
   ```

   

2. _components

   存放在该文件夹下不会被当作路由文件

3. src/app/[pathname]

   路由文件存放方式



# service

`https://app.storyblok.com/`

Storyblok 是一个头部 CMS（Content Management System，内容管理系统），它允许开发者和非技术人员以可视化的方式管理和发布内容。头部 CMS 是一种 API 驱动的 CMS，它提供了一个后端服务来管理内容，然后通过 API 将内容提供给任何前端系统。

### 使用方式

在content里使用对应的配置好的block

### 调用方式

**注意点** 

version和token这些私密信息放在.env.local中以防泄漏

```javascript
async function getLandingPageData(lang: string) {
    const version = process.env.SB_DATA_VERSION
    const token = process.env.SB_TOKEN
    const url = `https://api.storyblok.com/v2/cdn/stories/landing-page?&token=${token}&version=${version}&language=${lang}`
    const res = await fetch(url , { next: {revalidate:10} })
    
    const data = await res.json()
    
    const { nav_section, hero_section, services_section,testimonials_section, contact_section, faq_section, footer_section } = data.story.content;
  
    return {
        nav_section: nav_section[0],
        hero_section: hero_section[0],
        services_section: services_section[0],
        testimonials_section: testimonials_section[0],
        contact_section: contact_section[0],
        faq_section: faq_section[0],
        footer_section: footer_section[0]
    }
  }

```



