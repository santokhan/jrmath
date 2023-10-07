export function valid(params: string | string[]) {
    if (typeof params === 'string') {
        return params
    } else {
        // return if `Array.isArray(params)`
        return ""
    }
}

// <iframe id="drive-viewer-video-player-object-0" src="https://youtube.googleapis.com/embed/?status=ok&amp;hl=en_GB&amp;allow_embed=0&amp;ps=docs&amp;partnerid=30&amp;autoplay=0&amp;abd=0&amp;docid=1-BfqJ7CzQE5Os6WcMXvZ-zYgQ07IxxlR&amp;el=embed&amp;title=Lecture%2002%20By%20Jakaria%20Sir.mp4&amp;BASE_URL=https%3A%2F%2Fdrive.google.com%2Fu%2F0%2F&amp;iurl=https%3A%2F%2Fdrive.google.com%2Fu%2F0%2Fvt%3Fauthuser%3D0%26id%3D1-BfqJ7CzQE5Os6WcMXvZ-zYgQ07IxxlR%26s%3DAMedNnoAAAAAZRcXgPnddpFsI3iC3KNAoqchf26ISk8u&amp;cc3_module=1&amp;reportabuseurl=https%3A%2F%2Fdrive.google.com%2Fu%2F0%2Fabuse%3Fauthuser%3D0%26id%3D1-BfqJ7CzQE5Os6WcMXvZ-zYgQ07IxxlR&amp;token=1&amp;plid=V0QXiWuGXjj60w&amp;timestamp=1696004960991&amp;length_seconds=968&amp;BASE_YT_URL=https%3A%2F%2Fdrive.google.com%2Fu%2F0%2F&amp;cc_load_policy=1&amp;authuser=0&amp;wmode=window&amp;override_hl=1&amp;enablecastapi=0&amp;pipable=1&amp;enablepostapi=1&amp;postid=drive-viewer-video-player-object-0&amp;origin=https%3A%2F%2Fdrive.google.com" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay" title="Video player"></iframe>
export function google_drive_iframe(src: string) {
    // https://drive.google.com/file/d/1y-Tf7UFKiW8UVsSODscReupJrR_XrgXG/view?usp=drive_link
    // https://drive.google.com/file/d/1y-Tf7UFKiW8UVsSODscReupJrR_XrgXG/preview
    if (src.includes("view?usp=drive_link")) {
        src = src.replace("view?usp=drive_link", "preview");
    }

    return `<iframe src="${src}" class="w-full aspect-[16/9] relative]" allow="autoplay" allowfullscreen="allowfullscreen"></iframe>`;
}