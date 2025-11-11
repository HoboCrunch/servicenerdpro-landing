interface WelcomeEmailProps {
  name: string
  businessName: string
  plan: string
  googleCalendarUrl: string
  onboardingFormUrl: string
}

export function generateWelcomeEmail({
  name,
  businessName,
  plan,
  googleCalendarUrl,
  onboardingFormUrl,
}: WelcomeEmailProps): { html: string; text: string } {
  const planDisplayText = plan === 'pro' ? 'Service Pro+' : 'Service Pro Lite'
  const planDisplayHTML = plan === 'pro'
    ? '<span style="white-space: nowrap;">Service Pro<sup style="color: #f97316; font-weight: 600;">+</sup></span>'
    : '<span style="white-space: nowrap;">Service Pro<span style="color: #3b82f6; font-weight: 600;"> Lite</span></span>'

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Service Nerd Pro</title>
</head>
<body style="font-family: system-ui, -apple-system, sans-serif; line-height: 1.6; color: #334155; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
  <div style="background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
    <!-- Header -->
    <div style="background-color: #1e3a8a; padding: 32px 40px; margin-bottom: 0;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td valign="middle" style="padding-right: 20px;">
            <svg width="60" height="56" viewBox="0 0 507 472" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M198.393 371.5C198.393 371.5 203.538 373.482 205.998 374.5C211.798 376.902 209.451 393.773 210.443 400.104C212.462 412.982 214.699 429.285 217.529 442.001C219.389 450.356 232.588 456.567 239.5 459C209.719 454.818 212.417 432.404 208.787 408.5C206.844 395.703 207.708 381.43 198.393 371.5Z" fill="#1A9CEB"/>
              <path d="M250.048 361.397C262.02 357.786 328.291 342.154 330.659 357.201C333.027 372.248 326.644 403.127 319.498 413.76C303.019 438.281 277.224 437.993 252.498 442.001C223.379 446.722 221.087 435.091 220.23 413.76C219.374 392.429 219.836 383.679 222.014 377.76C224.014 372.325 235.476 365.793 250.048 361.397Z" fill="#7CCDFF"/>
              <path d="M358.541 359.454C369.196 356.591 370.701 395.306 378.201 405.501C380.692 408.887 383.953 411.18 387.79 412.624C380.767 411.773 374.902 409.15 370.963 403.796C367.951 399.702 365.906 391.008 363.847 382.255C361.802 373.561 359.742 364.809 356.708 360.445C357.275 359.967 357.884 359.631 358.541 359.454Z" fill="#1A9CEB"/>
              <path d="M271.17 351.625C242.923 345.924 210.833 334.203 195.748 329.848C176.933 323.242 132.821 309.202 101.674 296.822C70.5269 284.442 57.3954 277.78 40.0119 267.948C22.6284 258.116 20.2502 257.925 14.7567 247.663C9.26318 237.401 10.6938 226.193 12.5443 216.639C14.3949 207.085 21.3326 209.442 24.0095 199.892C26.6864 190.342 29.3672 176.404 29.3672 176.404C29.3672 176.404 36.8895 131.188 44.8644 109.842C57.5872 75.7881 79.6731 51.3242 114.867 28.6508C158.867 0.304367 222.867 -6.63706 270.91 6.18196C311.367 16.9769 369.833 54.4188 395.247 103.824C406.587 125.867 420.058 169.937 420.058 169.937C424.986 183.649 426.572 209.391 430.867 211.404C446.867 218.904 482.539 244.776 496.498 259.441C510.456 274.106 505.812 274.486 505.782 282.292C505.752 290.099 509.048 289.627 496.349 298.475C483.65 307.323 465.114 316.548 442.287 326.533C419.46 336.519 403.273 342.038 382.213 348.402C361.152 354.766 359.194 357.709 336.985 358.353C314.777 358.998 299.417 357.326 271.17 351.625Z" fill="#C47A02"/>
              <path d="M48.7425 131.019C54.041 120.966 59.037 110.801 65.808 101.654C87.0618 72.9409 114.848 56.4813 151.269 57.1848C171.702 57.5795 189.979 65.2087 206.644 76.5839C233.762 95.0952 255.15 118.684 268.261 149.077C277.177 169.744 281.358 191.04 274.151 213.286C273.907 214.038 273.918 214.873 273.663 216.748C279.628 211.696 280.586 204.83 284.104 198.702C285.66 201.58 285.684 204.006 285.434 206.403C284.093 219.261 290.879 227.513 301.032 233.717C310.819 239.697 321.759 238.808 332.183 237.121C352.472 233.839 371.799 226.806 391.016 219.666C396.671 217.565 400.255 207.634 398.252 199.796C393.05 179.444 386.958 159.365 379.01 139.893C370.739 119.627 361.182 99.9754 348.088 82.373C326.292 53.073 300.741 28.2663 265.362 15.6272C248.667 9.66285 231.567 6.85705 213.881 7.6185C206.236 7.94766 198.546 7.60684 190.966 9.04586C189.058 9.40815 187.018 9.31782 185.953 10.2488C245.55 30.4605 281.728 71.4525 294.698 133.572C294.146 133.689 294.848 136.17 293.429 134.223C279.555 94.649 258.117 60.7952 223.664 36.3474C210.5 27.0059 196.004 20.3763 179.956 17.469C169.052 15.4935 158.997 17.9831 149.078 22.9935C201.802 24.4904 239.78 50.3157 267.297 93.5909C283.933 119.754 293.026 151.198 290.463 174.354C288.846 149.374 280.191 126.75 267.021 105.816C249.89 78.5845 227.925 56.3081 197.793 43.7603C157.605 27.0239 121.094 33.9458 89.1118 63.3306C69.6894 81.1757 56.8903 103.452 47.9354 128.466C47.4713 129.655 47.8794 130.281 48.7425 131.019Z" fill="#FEBD02"/>
            </svg>
          </td>
          <td valign="middle">
            <h1 style="color: white; font-size: 32px; margin: 0; font-weight: 700; line-height: 1.2;">Welcome to <span style="white-space: nowrap;">Service Pro<span style="color: #fbbf24;"><sup>+</sup></span></span></h1>
          </td>
        </tr>
      </table>
    </div>

    <!-- Content Wrapper -->
    <div style="padding: 40px;">

    <!-- Welcome Message -->
    <div style="margin-bottom: 32px;">
      <p style="font-size: 16px; margin: 0 0 16px 0;">Hi ${name},</p>
      <p style="font-size: 16px; margin: 0 0 16px 0;">
        Thank you for choosing Service Pro! We're excited to help ${businessName} grow with a professional online presence.
      </p>
      <p style="font-size: 16px; margin: 0;">
        Your payment has been processed successfully. Now let's get started on building your website!
      </p>
    </div>

    <!-- Divider -->
    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;">

    <!-- Next Steps -->
    <div style="margin-bottom: 32px;">
      <h2 style="color: #1e293b; font-size: 24px; margin: 0 0 12px 0;">What's Next?</h2>
      <p style="font-size: 16px; margin: 0 0 24px 0; color: #64748b;">
        Complete the onboarding form below. After you submit it, you'll be able to schedule your onboarding call. That's it!
      </p>

      <!-- Complete Form & Schedule Call -->
      <div style="margin-bottom: 24px; padding: 24px; background-color: #f0f9ff; border-left: 4px solid #1e3a8a; border-radius: 8px;">
        <h3 style="color: #1e3a8a; font-size: 18px; margin: 0 0 12px 0;">Complete Your Onboarding Form</h3>
        <p style="font-size: 15px; margin: 0 0 16px 0; color: #64748b;">
          Fill out all the information we need to get you up and running. Tell us about your business, services, branding preferences, and project goals. We've already pre-filled some info to save you time!
        </p>
        <p style="font-size: 15px; margin: 0 0 16px 0; color: #64748b;">
          After completing the form, you'll be able to schedule a 30-minute onboarding call with our team to discuss your vision and timeline.
        </p>
        <a href="${onboardingFormUrl}"
           style="display: inline-block; background-color: #1e3a8a; color: white; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
          📋 Complete Onboarding Form
        </a>
      </div>
    </div>

    <!-- Timeline -->
    <div style="margin-bottom: 32px; padding: 20px; background-color: #f0fdf4; border-radius: 8px; text-align: center;">
      <p style="font-size: 18px; font-weight: 600; color: #16a34a; margin: 0;">
        ⚡ Your website will be live within 7 days!
      </p>
    </div>

    <!-- Divider -->
    <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;">

    <!-- Support -->
    <div style="margin-bottom: 0;">
      <h3 style="color: #1e293b; font-size: 18px; margin: 0 0 12px 0;">Questions or Need Help?</h3>
      <p style="font-size: 15px; margin: 0 0 8px 0; color: #64748b;">
        We're here to help! Reach out anytime:
      </p>
      <p style="font-size: 15px; margin: 0; color: #64748b;">
        📧 Email: <a href="mailto:contact@servicenerdpro.com" style="color: #f97316; text-decoration: none;">contact@servicenerdpro.com</a><br>
        📞 Phone: <a href="tel:5099616310" style="color: #f97316; text-decoration: none;">(509) 961-6310</a>
      </p>
    </div>
    </div>
  </div>

  <!-- Footer -->
  <div style="text-align: center; margin-top: 24px; color: #94a3b8; font-size: 14px;">
    <p style="margin: 0;">Service Pro - Professional Websites for Service Businesses</p>
    <p style="margin: 8px 0 0 0;">© ${new Date().getFullYear()} Service Pro. All rights reserved.</p>
  </div>
</body>
</html>
  `

  const text = `
Welcome to Service Pro!

Hi ${name},

Thank you for choosing Service Pro! We're excited to help ${businessName} grow with a professional online presence.

Your payment has been processed successfully. Now let's get started on building your website!

WHAT'S NEXT?

Complete the onboarding form below. After you submit it, you'll be able to schedule your onboarding call. That's it!

Complete Your Onboarding Form
Fill out all the information we need to get you up and running. Tell us about your business, services, branding preferences, and project goals. We've already pre-filled some info to save you time!

After completing the form, you'll be able to schedule a 30-minute onboarding call with our team to discuss your vision and timeline.

${onboardingFormUrl}

⚡ Your website will be live within 7 days!

QUESTIONS OR NEED HELP?

We're here to help! Reach out anytime:
📧 Email: contact@servicenerdpro.com
📞 Phone: (509) 961-6310

---
Service Pro - Professional Websites for Service Businesses
© ${new Date().getFullYear()} Service Pro. All rights reserved.
  `.trim()

  return { html, text }
}
