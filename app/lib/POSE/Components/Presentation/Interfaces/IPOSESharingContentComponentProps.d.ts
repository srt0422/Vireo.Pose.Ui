import * as React from "react";

export interface IPOSESharingContentComponentProps {
    type: string;
    value: string;
    wrapperClass: string;
    label: string;
    onChange: (e: React.SyntheticEvent) => void;
    onContentChange: (val: string) => void;
}
