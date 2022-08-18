import { SafeUrl } from "@angular/platform-browser"

export interface ImageModel{
    file: File,
    url: SafeUrl,
    name: string
}
