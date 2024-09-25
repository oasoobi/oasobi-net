import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card"
import { Download } from "@/components/downloads/dl-button";
import { Badge } from "@/components/ui/badge"

export interface GitHubRelease {
    url: string;
    assets_url: string;
    upload_url: string;
    html_url: string;
    id: number;
    author: GitHubUser;
    node_id: string;
    tag_name: string;
    target_commitish: string;
    name: string;
    draft: boolean;
    prerelease: boolean;
    created_at: string;
    published_at: string;
    assets: GitHubAsset[];
    tarball_url: string;
    zipball_url: string;
    body: string;
}

export interface GitHubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface GitHubAsset {
    url: string;
    id: number;
    node_id: string;
    name: string;
    label: string | null;
    uploader: GitHubUser;
    content_type: string;
    state: string;
    size: number;
    download_count: number;
    created_at: string;
    updated_at: string;
    browser_download_url: string;
}

export const DownloadCard = ({ release, isLatest }: { release: GitHubRelease, isLatest: boolean }) => {
    return (
        <Card className="mt-6">
            <CardHeader>
                <CardTitle className="flex items-center justify-between">{release.tag_name}{isLatest ? (<Badge>Latest Release</Badge>) : <></>}</CardTitle>
                <CardDescription className="whitespace-pre-line">
                    {release.body}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Download dlCount={release.assets[0].download_count} dlURL={release.assets[0].browser_download_url}></Download>
            </CardContent>
        </Card>)
}