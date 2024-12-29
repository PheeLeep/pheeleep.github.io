document.addEventListener('DOMContentLoaded', function (e) {
    document.querySelectorAll(".github-card").forEach(async function (el) {
        const username = el.getAttribute("username");

        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const resp = await response.json();
        const { name, avatar_url, public_repos, followers, html_url, following } = resp;

        el.innerHTML = `
            <div style="font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji; border-radius: 6px; line-height: 1.5; padding: 16px; font-size: 14px; color: #ffffff; background-color: #a868b9;">
                <div style="display: flex; align-items: center; margin-top: -4px">
                    <img style="width: 48px; height: 48px; border-radius: 50%" src="${avatar_url}" alt="Profile image"></img>
                    <div style="display: flex; flex-direction: column; margin-left: 12px">
                        <span style="font-weight: 500; font-size: 18px">
                            <a style="text-decoration: none; text-align: left; color: inherit;" target="_blank" href="${html_url}">
                                ${name}
                            </a>
                        </span>
                        <span style="font-weight: 400; font-size: 12px">
                            @${html_url.replace('https://', '')}
                        </span>
                    </div>
                </div>
    
                <div style="margin-top: 12px; display: flex; justify-content: space-evenly; align-items: center; ">
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-size: 10px; font-weight: 500;">
                            REPOSITORIES
                        </span>
                        <span style="font-weight: 600; font-size: 32px; line-height: 1">
                            ${public_repos}
                        </span>
                    </div>
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-size: 10px; font-weight: 500;">
                            FOLLOWERS
                        </span>
                        <span style="font-weight: 600;  font-size: 32px; line-height: 1">
                            ${followers}
                        </span>
                    </div>
                    <div style="display: flex; flex-direction: column;">
                        <span style="font-size: 10px; font-weight: 500;">
                            FOLLOWING
                        </span>
                        <span style="font-weight: 600; font-size: 32px; line-height: 1">
                            ${following}
                        </span>
                    </div>
                </div>
            </div>
        `;
    });
});