import React from 'react'
import './subscription.css'

const SubscribeForm = () => (
  <div>
    <script src="https://f.convertkit.com/ckjs/ck.5.js" />
    <form
      action="https://app.convertkit.com/forms/845222/subscriptions"
      className="seva-form formkit-form"
      method="post"
      data-sv-form="845222"
      data-uid="01d7236699"
      data-format="inline"
      data-version="5"
      data-options='{"settings":{"after_subscribe":{"action":"message","redirect_url":"","success_message":"Success! Now check your email to confirm your subscription."},"return_visitor":{"action":"hide","custom_content":""},"recaptcha":{"enabled":true}}}'
      min-width="400 500 600 700 800"
      style={{
        'background-color': 'rgb(255, 255, 255)',
        'border-radius': '6px'
      }}
    >
      <div data-style="minimal">
        <h1
          className="formkit-header"
          data-element="header"
          style={{
            color: 'rgb(77, 77, 77)',
            'font-size': '20px',
            'font-weight': '700'
          }}
        >
          Join the Newsletter
        </h1>
        <div
          data-element="subheader"
          className="formkit-subheader"
          style={{ color: 'rgb(104, 104, 104)', 'font-size': '15px' }}
        >
          <p>Subscribe to get our latest content by email.</p>
        </div>
        <ul
          className="formkit-alert formkit-alert-error"
          data-element="errors"
          data-group="alert"
        />
        <div
          data-element="fields"
          data-stacked="true"
          className="seva-fields formkit-fields"
        >
          <div className="formkit-field">
            <input
              className="formkit-input"
              aria-label="Your first name"
              name="fields[first_name]"
              placeholder="Your first name"
              type="text"
              style={{
                color: 'rgb(0, 0, 0)',
                'border-color': 'rgb(227, 227, 227)',
                'border-radius': '4px',
                'font-weight': '400'
              }}
            />
          </div>
          <div className="formkit-field">
            <input
              className="formkit-input"
              name="email_address"
              placeholder="Your email address"
              required=""
              type="text"
              style={{
                color: 'rgb(0, 0, 0)',
                'border-color': 'rgb(227, 227, 227)',
                'border-radius': '4px',
                'font-weight': '400'
              }}
            />
          </div>
          <button
            data-element="submit"
            className="formkit-submit formkit-submit"
            style={{
              color: 'rgb(255, 255, 255)',
              'background-color': 'rgb(22, 119, 190)',
              'border-radius': '24px',
              'font-weight': '700'
            }}
          >
            <div className="formkit-spinner">
              <div />
              <div />
              <div />
            </div>
            <span>Subscribe</span>
          </button>
        </div>
        <div
          data-element="guarantee"
          className="formkit-guarantee"
          style={{
            color: 'rgb(77, 77, 77)',
            'font-size': '13px',
            'font-weight': '400'
          }}
        >
          <p>We won't send you spam. Unsubscribe at any time.</p>
        </div>
        <a
          href="https://convertkit.com/?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"
          className="formkit-powered-by"
          data-element="powered-by"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered By ConvertKit
        </a>
      </div>
    </form>
  </div>
)

export default SubscribeForm
