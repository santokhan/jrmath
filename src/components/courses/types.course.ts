export interface VideoData {
    university: string,
    vdeoChiperId: string | undefined,
    googleDrive: string | undefined,
    _rev: string,
    lecture: number,
    chapter: number,
    year: number,
    title: string,
    description: string,
    _id: string
}

export interface OTP {
    otp: string,
    playbackInfo: string
}

export interface CourseType {
    coursePreview: string
    description: string
    title: string
    university: string
    year: number
    _id: string
    _rev: string
    _type: string
    price: string,
    discount: string,
    whatYouWillLearn: string[]
}