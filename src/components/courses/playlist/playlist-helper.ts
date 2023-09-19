export function to(params: any, videoId: string) {
    return `/playlist/${params.course}/${params.year}/${params.courseId}/${videoId}`
}

export function sort_videos(videos: any[]): any[] {
    if (videos instanceof Array) {
        return videos.sort((a: any, b: any) => {
            if (a.title > b.title) {
                return 1
            } else if (a.title < b.title) {
                return -1
            } else {
                return 0
            }
        })
    } else {
        return []
    }
}