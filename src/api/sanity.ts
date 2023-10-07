class SanityAPI {
    URL = import.meta.env.VITE_SANITY_API
    build_api(query: string) { return this.URL + query }
    course_col = 'courses'
    video_col = 'videos'
    /**
     * Read course by course _id
     * 
     * @param id 
     * @param callBack 
     */
    async getCourseById(id: string, callBack: (data: any) => void) {

        // The `"courses"` is collection on Sanity
        const url = this.build_api(`?query=*[_type in path("courses") %26%26 _id == '${id}']`) // output https://fxso6ppi.api.sanity.io/v2021-03-25/data/query/production?query=*[_type in path("courses")]

        await fetch(url).then(res => res.json()).then(data => {
            callBack(data?.result)
        })
    }
    async get_all_courses(callBack: (data: any) => void) {
        // ✅ It will show error because of `&&`. Use `%26%26` instead of `&&`
        // ❕ Below code example is a big solution do not delete this
        // const url2 = `https://fxso6ppi.api.sanity.io/v2021-03-25/data/query/production?query=*[_type in path('courses') && university == 'nuh' && year == 3]` 
        // await fetch(url2).then(res => res.json()).then(data => {
        //     console.log({
        //         url: url2,
        //         data
        //     });
        // })

        // ✅ Copy URL from Sanity Vision👁 then modify it till then it failed
        // ✅ Must have to use coutation on GROQ string query parameter. Example `'${university}'`
        const url = `https://fxso6ppi.api.sanity.io/v2021-03-25/data/query/production?query=*[_type in path('courses')]` // ✅ Output `https://fxso6ppi.api.sanity.io/v2021-03-25/data/query/production?query=*[_type in path('courses') %26%26 university == 'nuh' %26%26 year Output 

        await fetch(url).then(res => res.json()).then(data => {
            callBack(data?.result)
        })
    }
    async getCourses(university: string, year: number, callBack: (data: any) => void) {
        if (!university && !year) return;

        // ✅ It will show error because of `&&`. Use `%26%26` instead of `&&`
        // ❕ Below code example is a big solution do not delete this
        // const url2 = `https://fxso6ppi.api.sanity.io/v2021-03-25/data/query/production?query=*[_type in path('courses') && university == 'nuh' && year == 3]` 
        // await fetch(url2).then(res => res.json()).then(data => {
        //     console.log({
        //         url: url2,
        //         data
        //     });
        // })

        // The `"courses"` is collection on Sanity
        // ✅ Copy URL from Sanity Vision👁 then modify it till then it failed
        // ✅ Must have to use coutation on GROQ string query parameter. Example `'${university}'`
        const url = `https://fxso6ppi.api.sanity.io/v2021-03-25/data/query/production?query=*[_type in path('courses') %26%26 university == '${university}' %26%26 year == ${year}]` // ✅ Output `https://fxso6ppi.api.sanity.io/v2021-03-25/data/query/production?query=*[_type in path('courses') %26%26 university == 'nuh' %26%26 year Output 

        await fetch(url).then(res => res.json()).then(data => {
            callBack(data?.result)
        })
    }
    async getVideos(callBack: (data: any) => void) {

        // The `"videos"` is collection on Sanity
        const url = this.build_api(`?query=*[_type in path("videos")]`)

        await fetch(url).catch(err => {
            throw err
        }).then(res => res.json()).then(data => {
            callBack(data)
        })
    }
    async getCourseTitle(courseId: string, callBack: (data: any[]) => void) {
        if (!courseId) return;

        // The `"videos"` is collection on Sanity
        const url = this.build_api(`?query=*[_type in path("courses") %26%26 _id == '${courseId}']`)

        await fetch(url).catch(err => {
            throw err
        }).then(res => res.json()).then(data => {
            callBack(data.result)
        })
    }
    async getCourseTitle2(courseId: string) {
        if (!courseId) return;

        // The `"videos"` is collection on Sanity
        const url = this.build_api(`?query=*[_type in path("courses") %26%26 _id == '${courseId}']`)

        const res = await fetch(url)
        const data = await res.json()
        return data.result;
    }
    async getVideoByCourseTitle(university: string, year: number, courseId: string, callBack: (data: any) => void) {
        if (!university && !year && !courseId) return;

        this.getCourseTitle(courseId, async (data) => {
            if (Array.isArray(data)) {
                const courseTitle = data[0].title
                // The `"videos"` is collection on Sanity
                // ✅ output *[_type in path('videos') && university == 'nuh' && year == 3 && courseTitle == 'Numerical Analysis']
                const url = this.build_api(`?query=*[_type in path("videos") %26%26 university == '${university}' %26%26 year == ${year} %26%26 courseTitle == '${courseTitle}']`)

                await fetch(url).catch(err => {
                    throw err
                }).then(res => res.json()).then(data => {
                    callBack(data)
                })
            }
        })
    }
    async totalUser(callBack: (data: any) => void) {
        const url = this.build_api(`?query=*[_type in path('user-access')]`)
        const res = await fetch(url)
        const data = await res.json()
        if (data) {
            callBack(data.result)
        }
    }
    async readUserAccess(email: string, courseTitle: string) {
        if (!email && !courseTitle) return;

        // The `"videos"` is collection on Sanity
        // ✅ output *[_type in path('videos') && university == 'nuh' && year == 3 && courseTitle == 'Numerical Analysis']
        const url = this.build_api(`?query=*[_type in path('user-access') %26%26 email == '${email}' %26%26 courseTitle == '${courseTitle}']`)

        const res = await fetch(url)
        const data = await res.json()
        if (Array.isArray(data.result) && data.result.length > 0) {
            // console.log(data.result);
            return true;
        } else {
            return false;
        }
    }
}

class Blogs extends SanityAPI {
    constructor() {
        super()
    }
    async get_blogs(callBack: (data: any) => void) {
        const url = `https://fxso6ppi.api.sanity.io/v2021-03-25/data/query/production?query=*[_type in path('blog')]`

        await fetch(url).then(res => res.json()).then(data => {
            callBack(data?.result)
        })
    }
}
export const blogs = new Blogs()

class Notice extends SanityAPI {
    constructor() {
        super()
    }
    async get_notices(callBack: (data: any) => void) {
        const url = `https://fxso6ppi.api.sanity.io/v2021-03-25/data/query/production?query=*[_type in path('notice')]`

        await fetch(url).then(res => res.json()).then(data => {
            callBack(data?.result)
        })
    }
}
export const notice = new Notice()

class Questions extends SanityAPI {
    constructor() {
        super()
    }
    async get_questions(callBack: (data: any) => void) {
        const url = `https://fxso6ppi.api.sanity.io/v2021-03-25/data/query/production?query=*[_type in path('questions')]`

        await fetch(url).then(res => res.json()).then(data => {
            callBack(data?.result)
        })
    }
}
export const questions = new Questions()

class DemoVideos extends SanityAPI {
    constructor() {
        super()
    }
    async get_videos(callBack: (data: any) => void) {
        const url = `https://fxso6ppi.api.sanity.io/v2021-03-25/data/query/production?query=*[_type in path('demo')]`

        await fetch(url).then(res => res.json()).then(data => {
            callBack(data?.result)
        })
    }
}
export const demoVideos = new DemoVideos()

const sanityAPI = new SanityAPI()
export default sanityAPI