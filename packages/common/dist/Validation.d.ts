import * as yup from 'yup';
export declare const userValidationSchema: yup.ObjectSchema<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    displayName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    username: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    displayName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    username: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    displayName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    username: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>>;
export declare const userLoginValidationSchema: yup.ObjectSchema<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    password: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>>;
export declare const emailValidation: yup.ObjectSchema<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    email: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>>;
export declare const postMarkDownValidation: yup.ObjectSchema<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    post_text: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    post_text: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    post_text: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>>;
export declare const postLinkValidation: yup.ObjectSchema<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    link: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    link: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    link: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>>;
export declare const postImagesValidation: yup.ObjectSchema<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    images: any;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    images: any;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    images: any;
}>>>;
export declare const postVideosValidation: yup.ObjectSchema<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    videos: any;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    videos: any;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    title: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    videos: any;
}>>>;
export declare const subCreateValidation: yup.ObjectSchema<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    displayName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    displayName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    displayName: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    name: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>>;
export declare const commentValidation: yup.ObjectSchema<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    post_id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    comment_text: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    post_id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    comment_text: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    post_id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
    comment_text: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>>;
export declare const postDeleteValidation: yup.ObjectSchema<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    post_id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>, Record<string, any>, import("yup/lib/object").TypeOfShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    post_id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>, import("yup/lib/object").AssertsShape<import("yup/lib/object").Assign<Record<string, yup.AnySchema<any, any, any> | import("yup/lib/Reference").default<unknown> | import("yup/lib/Lazy").default<any, any>>, {
    post_id: import("yup/lib/string").RequiredStringSchema<string | undefined, Record<string, any>>;
}>>>;
//# sourceMappingURL=Validation.d.ts.map