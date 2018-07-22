{
    "name": "\u041f\u0440\u043e\u0444\u0438\u0411\u0435\u0442\u043e\u043d",
    "description": "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u0438 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043d\u0430\u0438\u043b\u0443\u0447\u0448\u0435\u0433\u043e \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0411\u0435\u0442\u043e\u043d\u0430",
    "url": "http:\/\/www.profibeton.com.ua",
    "home": "http:\/\/www.profibeton.com.ua",
    "gmt_offset": "3",
    "timezone_string": "",
    "namespaces": ["oembed\/1.0", "jetpack\/v4", "yoast\/v1", "wp-super-cache\/v1", "wp\/v2"],
    "authentication": [],
    "routes": {
        "\/": {
            "namespace": "",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/"
            }
        },
        "\/oembed\/1.0": {
            "namespace": "oembed\/1.0",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "namespace": {
                        "required": false,
                        "default": "oembed\/1.0"
                    },
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/oembed\/1.0"
            }
        },
        "\/oembed\/1.0\/embed": {
            "namespace": "oembed\/1.0",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "url": {
                        "required": true
                    },
                    "format": {
                        "required": false,
                        "default": "json"
                    },
                    "maxwidth": {
                        "required": false,
                        "default": 600
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/oembed\/1.0\/embed"
            }
        },
        "\/oembed\/1.0\/proxy": {
            "namespace": "oembed\/1.0",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "url": {
                        "required": true,
                        "description": "URL \u0440\u0435\u0441\u0443\u0440\u0441\u0430 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f oEmbed \u0434\u0430\u043d\u043d\u044b\u0445.",
                        "type": "string"
                    },
                    "format": {
                        "required": false,
                        "default": "json",
                        "enum": ["json", "xml"],
                        "description": "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 oEmbed.",
                        "type": "string"
                    },
                    "maxwidth": {
                        "required": false,
                        "default": 600,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0448\u0438\u0440\u0438\u043d\u0430 \u0432\u043d\u0435\u0434\u0440\u044f\u0435\u043c\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u0430\u0445. ",
                        "type": "integer"
                    },
                    "maxheight": {
                        "required": false,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u0441\u043e\u0442\u0430 \u0432\u043d\u0435\u0434\u0440\u044f\u0435\u043c\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0432 \u043f\u0438\u043a\u0441\u0435\u043b\u0430\u0445.",
                        "type": "integer"
                    },
                    "discover": {
                        "required": false,
                        "default": true,
                        "description": "\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u044c \u043b\u0438 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 oEmbed \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432 \u043d\u0435 \u0438\u0437 \u0431\u0435\u043b\u043e\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430.",
                        "type": "boolean"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/oembed\/1.0\/proxy"
            }
        },
        "\/jetpack\/v4": {
            "namespace": "jetpack\/v4",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "namespace": {
                        "required": false,
                        "default": "jetpack\/v4"
                    },
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4"
            }
        },
        "\/jetpack\/v4\/plans": {
            "namespace": "jetpack\/v4",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/plans"
            }
        },
        "\/jetpack\/v4\/jitm": {
            "namespace": "jetpack\/v4",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/jitm"
            }
        },
        "\/jetpack\/v4\/verify_registration": {
            "namespace": "jetpack\/v4",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/verify_registration"
            }
        },
        "\/jetpack\/v4\/remote_authorize": {
            "namespace": "jetpack\/v4",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/remote_authorize"
            }
        },
        "\/jetpack\/v4\/connection": {
            "namespace": "jetpack\/v4",
            "methods": ["GET", "POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/connection"
            }
        },
        "\/jetpack\/v4\/rewind": {
            "namespace": "jetpack\/v4",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/rewind"
            }
        },
        "\/jetpack\/v4\/connection\/url": {
            "namespace": "jetpack\/v4",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/connection\/url"
            }
        },
        "\/jetpack\/v4\/connection\/data": {
            "namespace": "jetpack\/v4",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/connection\/data"
            }
        },
        "\/jetpack\/v4\/connection\/owner": {
            "namespace": "jetpack\/v4",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/connection\/owner"
            }
        },
        "\/jetpack\/v4\/tracking\/settings": {
            "namespace": "jetpack\/v4",
            "methods": ["GET", "POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "tracks_opt_out": {
                        "required": false,
                        "type": "boolean"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/tracking\/settings"
            }
        },
        "\/jetpack\/v4\/connection\/user": {
            "namespace": "jetpack\/v4",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/connection\/user"
            }
        },
        "\/jetpack\/v4\/site": {
            "namespace": "jetpack\/v4",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/site"
            }
        },
        "\/jetpack\/v4\/site\/features": {
            "namespace": "jetpack\/v4",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/site\/features"
            }
        },
        "\/jetpack\/v4\/identity-crisis\/confirm-safe-mode": {
            "namespace": "jetpack\/v4",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/identity-crisis\/confirm-safe-mode"
            }
        },
        "\/jetpack\/v4\/identity-crisis\/start-fresh": {
            "namespace": "jetpack\/v4",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/identity-crisis\/start-fresh"
            }
        },
        "\/jetpack\/v4\/identity-crisis\/migrate": {
            "namespace": "jetpack\/v4",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/identity-crisis\/migrate"
            }
        },
        "\/jetpack\/v4\/module\/all": {
            "namespace": "jetpack\/v4",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/module\/all"
            }
        },
        "\/jetpack\/v4\/module\/all\/active": {
            "namespace": "jetpack\/v4",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "modules": {
                        "required": true,
                        "default": "",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "active": {
                        "required": false,
                        "default": true,
                        "type": "boolean"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/module\/all\/active"
            }
        },
        "\/jetpack\/v4\/module\/(?P<slug>[a-z\\-]+)": {
            "namespace": "jetpack\/v4",
            "methods": ["GET", "POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "edit"
                    },
                    "carousel_background_color": {
                        "required": false,
                        "default": "black",
                        "enum": ["black", "white"],
                        "description": "\u0426\u0432\u0435\u0442\u043e\u0432\u0430\u044f \u0441\u0445\u0435\u043c\u0430.",
                        "type": "string"
                    },
                    "carousel_display_exif": {
                        "required": false,
                        "default": 0,
                        "description": "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043f\u043e\u043a\u0430\u0437 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 (<a href=\"http:\/\/en.wikipedia.org\/wiki\/Exchangeable_image_file_format\" target=\"_blank\">Exif<\/a>) \u0432 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438 (\u0435\u0441\u043b\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e).",
                        "type": "boolean"
                    },
                    "highlander_comment_form_prompt": {
                        "required": false,
                        "default": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
                        "description": "\u0422\u0435\u043a\u0441\u0442 \u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f",
                        "type": "string"
                    },
                    "jetpack_comment_form_color_scheme": {
                        "required": false,
                        "default": "light",
                        "enum": ["light", "dark", "transparent"],
                        "description": "\u0426\u0432\u0435\u0442\u043e\u0432\u0430\u044f \u0441\u0445\u0435\u043c\u0430",
                        "type": "string"
                    },
                    "jetpack_portfolio": {
                        "required": false,
                        "default": 0,
                        "description": "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0438\u043f \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u00ab\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e\u00bb Jetpack.",
                        "type": "boolean"
                    },
                    "jetpack_portfolio_posts_per_page": {
                        "required": false,
                        "default": 10,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e.",
                        "type": "integer"
                    },
                    "jetpack_testimonial": {
                        "required": false,
                        "default": 0,
                        "description": "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0438\u043f \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u00ab\u041e\u0442\u0437\u044b\u0432\u00bb Jetpack.",
                        "type": "boolean"
                    },
                    "jetpack_testimonial_posts_per_page": {
                        "required": false,
                        "default": 10,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445 \u043e\u0442\u0437\u044b\u0432\u043e\u0432.",
                        "type": "integer"
                    },
                    "tiled_galleries": {
                        "required": false,
                        "default": 0,
                        "description": "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043f\u043e\u043a\u0430\u0437 \u0432\u0441\u0435\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0433\u0430\u043b\u0435\u0440\u0435\u0438 \u0432 \u0432\u0438\u0434\u0435 \u043c\u043e\u0437\u0430\u0438\u043a\u0438.",
                        "type": "boolean"
                    },
                    "gravatar_disable_hovercards": {
                        "required": false,
                        "default": "enabled",
                        "enum": ["enabled", "disabled"],
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043a\u0443\u0440\u0441\u043e\u0440\u0430 \u043c\u044b\u0448\u0438 \u043d\u0430 \u0438\u0445 \u0433\u0440\u0430\u0432\u0430\u0442\u0430\u0440\u044b",
                        "type": "string"
                    },
                    "infinite_scroll": {
                        "required": false,
                        "default": 1,
                        "description": "\u0414\u043e \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0441\u0442\u0438",
                        "type": "boolean"
                    },
                    "infinite_scroll_google_analytics": {
                        "required": false,
                        "default": 0,
                        "description": "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f Google Analytics \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u0443\u044e \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0443",
                        "type": "boolean"
                    },
                    "wpl_default": {
                        "required": false,
                        "default": "on",
                        "enum": ["on", "off"],
                        "description": "\u041b\u044e\u0431\u0438\u043c\u043e\u0435 Wordpress.com",
                        "type": "string"
                    },
                    "social_notifications_like": {
                        "required": false,
                        "default": 1,
                        "description": "\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435, \u043a\u043e\u0433\u0434\u0430 \u043a\u0442\u043e-\u043b\u0438\u0431\u043e \u043d\u0430\u0436\u0438\u043c\u0430\u0435\u0442 \u043a\u043d\u043e\u043f\u043a\u0443 \u00ab\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f\u00bb \u043f\u043e\u0434 \u0437\u0430\u043f\u0438\u0441\u044c\u044e",
                        "type": "boolean"
                    },
                    "wpcom_publish_comments_with_markdown": {
                        "required": false,
                        "default": 0,
                        "description": "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 Markdown \u0434\u043b\u044f \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432.",
                        "type": "boolean"
                    },
                    "wpcom_publish_posts_with_markdown": {
                        "required": false,
                        "default": 0,
                        "description": "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0443 \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0435\u0439.",
                        "type": "boolean"
                    },
                    "wp_mobile_excerpt": {
                        "required": false,
                        "default": 0,
                        "description": "\u0426\u0438\u0442\u0430\u0442\u044b",
                        "type": "boolean"
                    },
                    "wp_mobile_featured_images": {
                        "required": false,
                        "default": 0,
                        "description": "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",
                        "type": "boolean"
                    },
                    "wp_mobile_app_promos": {
                        "required": false,
                        "default": 0,
                        "description": "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043f\u043e\u043a\u0430\u0437 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0434\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 WordPress \u0432 \u043f\u043e\u0434\u0432\u0430\u043b\u0435 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0442\u0435\u043c\u044b.",
                        "type": "boolean"
                    },
                    "monitor_receive_notifications": {
                        "required": false,
                        "default": 0,
                        "description": "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u043f\u043e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u0435.",
                        "type": "boolean"
                    },
                    "post_by_email_address": {
                        "required": false,
                        "default": "noop",
                        "enum": ["noop", "create", "regenerate", "delete"],
                        "description": "E-mail \u0430\u0434\u0440\u0435\u0441",
                        "type": "string"
                    },
                    "jetpack_protect_key": {
                        "required": false,
                        "default": "",
                        "description": "\u0417\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u043a\u043b\u044e\u0447 API",
                        "type": "string"
                    },
                    "jetpack_protect_global_whitelist": {
                        "required": false,
                        "default": "",
                        "description": "\u0417\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0439",
                        "type": "string"
                    },
                    "sharing_services": {
                        "required": false,
                        "default": {
                            "visible": ["twitter", "facebook", "google-plus-1"],
                            "hidden": []
                        },
                        "description": "\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0441\u043b\u0443\u0436\u0431\u044b \u0438 \u0441\u043b\u0443\u0436\u0431\u044b, \u0441\u043a\u0440\u044b\u0442\u044b\u0435 \u0437\u0430 \u043a\u043d\u043e\u043f\u043a\u043e\u0439",
                        "type": "object"
                    },
                    "button_style": {
                        "required": false,
                        "default": "icon",
                        "enum": ["icon-text", "icon", "text", "official"],
                        "description": "\u0421\u0442\u0438\u043b\u044c \u043a\u043d\u043e\u043f\u043a\u0438",
                        "type": "string"
                    },
                    "sharing_label": {
                        "required": false,
                        "default": "",
                        "description": "\u042f\u0440\u043b\u044b\u043a",
                        "type": "string"
                    },
                    "show": {
                        "required": false,
                        "default": ["post"],
                        "description": "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b, \u043a\u043e\u0433\u0434\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "jetpack-twitter-cards-site-tag": {
                        "required": false,
                        "default": "",
                        "description": "\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0441\u0430\u0439\u0442\u0430 \u0432 \u0422\u0432\u0438\u0442\u0442\u0435\u0440\u0435.",
                        "type": "string"
                    },
                    "sharedaddy_disable_resources": {
                        "required": false,
                        "default": 0,
                        "description": "\u0414\u0435\u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c CSS \u0438 JS",
                        "type": "boolean"
                    },
                    "custom": {
                        "required": false,
                        "default": {
                            "sharing_name": "",
                            "sharing_url": "",
                            "sharing_icon": ""
                        },
                        "description": "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0441\u043b\u0443\u0436\u0431\u044b \u043e\u0431\u0449\u0435\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c.",
                        "type": "object"
                    },
                    "sharing_delete_service": {
                        "required": false,
                        "default": "",
                        "description": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0443\u044e \u0441\u043b\u0443\u0436\u0431\u0443 \u043e\u0431\u0449\u0435\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430.",
                        "type": "string"
                    },
                    "jetpack_sso_require_two_step": {
                        "required": false,
                        "default": 0,
                        "description": "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u0432\u0443\u0445\u0444\u0430\u043a\u0442\u043e\u0440\u043d\u0430\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",
                        "type": "boolean"
                    },
                    "jetpack_sso_match_by_email": {
                        "required": false,
                        "default": 0,
                        "description": "\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b",
                        "type": "boolean"
                    },
                    "stb_enabled": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442 &lt;em&gt;&#039;\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0431\u043b\u043e\u0433&#039;&lt;\/em&gt; \u0432 \u0444\u043e\u0440\u043c\u0435 \u0434\u043b\u044f \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",
                        "type": "boolean"
                    },
                    "stc_enabled": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442 &lt;em&gt;&#039;\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438&#039;&lt;\/em&gt; \u0432 \u0444\u043e\u0440\u043c\u0435 \u0434\u043b\u044f \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",
                        "type": "boolean"
                    },
                    "show_headline": {
                        "required": false,
                        "default": 1,
                        "description": "\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u043c",
                        "type": "boolean"
                    },
                    "show_thumbnails": {
                        "required": false,
                        "default": 0,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u044b, \u0435\u0441\u043b\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e",
                        "type": "boolean"
                    },
                    "onpublish": {
                        "required": false,
                        "default": 0,
                        "description": "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u0439 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b.",
                        "type": "boolean"
                    },
                    "onupdate": {
                        "required": false,
                        "default": 0,
                        "description": "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b.",
                        "type": "boolean"
                    },
                    "Bias Language": {
                        "required": false,
                        "default": 0,
                        "description": "\u041d\u0435\u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043b\u0435\u043a\u0441\u0438\u043a\u0430",
                        "type": "boolean"
                    },
                    "Cliches": {
                        "required": false,
                        "default": 0,
                        "description": "\u041a\u043b\u0438\u0448\u0435",
                        "type": "boolean"
                    },
                    "Complex Expression": {
                        "required": false,
                        "default": 0,
                        "description": "\u0421\u043b\u043e\u0436\u043d\u044b\u0435 \u0444\u0440\u0430\u0437\u044b",
                        "type": "boolean"
                    },
                    "Diacritical Marks": {
                        "required": false,
                        "default": 0,
                        "description": "\u0414\u0438\u0430\u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u043d\u0430\u043a\u0438",
                        "type": "boolean"
                    },
                    "Double Negative": {
                        "required": false,
                        "default": 0,
                        "description": "\u0414\u0432\u043e\u0439\u043d\u043e\u0435 \u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u0435",
                        "type": "boolean"
                    },
                    "Hidden Verbs": {
                        "required": false,
                        "default": 0,
                        "description": "\u0421\u043a\u0440\u044b\u0442\u044b\u0435 \u0433\u043b\u0430\u0433\u043e\u043b\u044b",
                        "type": "boolean"
                    },
                    "Jargon Language": {
                        "required": false,
                        "default": 0,
                        "description": "\u0416\u0430\u0440\u0433\u043e\u043d",
                        "type": "boolean"
                    },
                    "Passive voice": {
                        "required": false,
                        "default": 0,
                        "description": "\u0421\u0442\u0440\u0430\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043b\u043e\u0433",
                        "type": "boolean"
                    },
                    "Phrases to Avoid": {
                        "required": false,
                        "default": 0,
                        "description": "\u0424\u0440\u0430\u0437\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044c",
                        "type": "boolean"
                    },
                    "Redundant Expression": {
                        "required": false,
                        "default": 0,
                        "description": "\u041d\u0435\u043d\u0443\u0436\u043d\u044b\u0435 \u0444\u0440\u0430\u0437\u044b",
                        "type": "boolean"
                    },
                    "guess_lang": {
                        "required": false,
                        "default": 0,
                        "description": "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0439 \u044f\u0437\u044b\u043a \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0433\u0440\u0430\u043c\u043e\u0442\u043d\u043e\u0441\u0442\u0438 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446",
                        "type": "boolean"
                    },
                    "ignored_phrases": {
                        "required": false,
                        "default": "",
                        "description": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0440\u0430\u0437\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",
                        "type": "string"
                    },
                    "unignore_phrase": {
                        "required": false,
                        "default": "",
                        "description": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u0440\u0430\u0437\u0443 \u0438\u0437 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0445",
                        "type": "string"
                    },
                    "google": {
                        "required": false,
                        "default": "",
                        "description": "Google Search Console",
                        "type": "string"
                    },
                    "bing": {
                        "required": false,
                        "default": "",
                        "description": "\u0426\u0435\u043d\u0442\u0440 \u0432\u0435\u0431-\u043c\u0430\u0441\u0442\u0435\u0440\u0430 Bing",
                        "type": "string"
                    },
                    "pinterest": {
                        "required": false,
                        "default": "",
                        "description": "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432 Pinterest",
                        "type": "string"
                    },
                    "yandex": {
                        "required": false,
                        "default": "",
                        "description": "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u0430 Yandex",
                        "type": "string"
                    },
                    "enable_header_ad": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043d\u0430\u0432\u0435\u0440\u0445\u0443 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b.",
                        "type": "boolean"
                    },
                    "wordads_approved": {
                        "required": false,
                        "default": 0,
                        "description": "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043b\u0438 \u044d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443 WordAds?",
                        "type": "boolean"
                    },
                    "wordads_second_belowpost": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u0442\u043e\u0440\u043e\u0439 \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043d\u0438\u0436\u0435 \u0437\u0430\u043f\u0438\u0441\u0438?",
                        "type": "boolean"
                    },
                    "wordads_display_front_page": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u0439?",
                        "type": "boolean"
                    },
                    "wordads_display_post": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u0432 \u0437\u0430\u043f\u0438\u0441\u044f\u0445?",
                        "type": "boolean"
                    },
                    "wordads_display_page": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445?",
                        "type": "boolean"
                    },
                    "wordads_display_archive": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445 \u0430\u0440\u0445\u0438\u0432\u043e\u0432?",
                        "type": "boolean"
                    },
                    "google_analytics_tracking_id": {
                        "required": false,
                        "default": "",
                        "description": "Google Analytics",
                        "type": "string"
                    },
                    "admin_bar": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0433\u0440\u0430\u0444\u0438\u043a \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 48 \u0447\u0430\u0441\u043e\u0432 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432 \u0432 \u043f\u0430\u043d\u0435\u043b\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430.",
                        "type": "boolean"
                    },
                    "roles": {
                        "required": false,
                        "default": ["administrator"],
                        "description": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043e\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u043e\u0442\u0447\u0451\u0442\u044b \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "count_roles": {
                        "required": false,
                        "default": ["administrator"],
                        "description": "\u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b \u0441\u0442\u0440\u0430\u043d\u0438\u0446, \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0451\u043d\u043d\u044b\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "blog_id": {
                        "required": false,
                        "default": 0,
                        "description": "\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0431\u043b\u043e\u0433\u0430.",
                        "type": "boolean"
                    },
                    "do_not_track": {
                        "required": false,
                        "default": 1,
                        "description": "\u041d\u0435 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c.",
                        "type": "boolean"
                    },
                    "hide_smile": {
                        "required": false,
                        "default": 1,
                        "description": "\u0421\u043a\u0440\u044b\u0442\u044c \u0441\u043c\u0430\u0439\u043b\u0438\u043a \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438.",
                        "type": "boolean"
                    },
                    "version": {
                        "required": false,
                        "default": 9,
                        "description": "\u0412\u0435\u0440\u0441\u0438\u044f.",
                        "type": "integer"
                    },
                    "akismet_show_user_comments_approved": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "wordpress_api_key": {
                        "required": false,
                        "default": "",
                        "description": "",
                        "type": "string"
                    },
                    "dismiss_dash_app_card": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "dismiss_empty_stats_card": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "lang_id": {
                        "required": false,
                        "default": "en_US",
                        "description": "\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u044f\u0437\u044b\u043a \u0441\u0430\u0439\u0442\u0430",
                        "type": "string"
                    },
                    "onboarding": {
                        "required": false,
                        "default": {
                            "siteTitle": "",
                            "siteDescription": "",
                            "siteType": "personal",
                            "homepageFormat": "posts",
                            "addContactForm": 0,
                            "businessAddress": {
                                "name": "",
                                "street": "",
                                "city": "",
                                "state": "",
                                "zip": ""
                            },
                            "installWooCommerce": false
                        },
                        "description": "",
                        "type": "object"
                    },
                    "show_welcome_for_new_plan": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "after-the-deadline": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "carousel": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "comment-likes": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "comments": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "contact-form": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "custom-content-types": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "custom-css": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "enhanced-distribution": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "google-analytics": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "gravatar-hovercards": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "infinite-scroll": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "json-api": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "latex": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "lazy-images": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "likes": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "manage": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "markdown": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "masterbar": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "minileven": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "monitor": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "notes": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "photon": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "post-by-email": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "protect": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "publicize": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "pwa": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "related-posts": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "search": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "seo-tools": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "sharedaddy": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "shortcodes": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "shortlinks": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "sitemaps": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "sso": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "stats": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "subscriptions": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "tiled-gallery": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "vaultpress": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "verification-tools": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "videopress": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "widget-visibility": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "widgets": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "wordads": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/jetpack\/v4\/module\/(?P<slug>[a-z\\-]+)\/active": {
            "namespace": "jetpack\/v4",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "active": {
                        "required": true,
                        "default": true,
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/jetpack\/v4\/module\/(?P<slug>[a-z\\-]+)\/data": {
            "namespace": "jetpack\/v4",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "range": {
                        "required": false,
                        "default": "day",
                        "type": "string"
                    }
                }
            }]
        },
        "\/jetpack\/v4\/module\/(?P<service>[a-z\\-]+)\/key\/check": {
            "namespace": "jetpack\/v4",
            "methods": ["GET", "POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "api_key": {
                        "required": false,
                        "default": "",
                        "type": "string"
                    }
                }
            }]
        },
        "\/jetpack\/v4\/settings": {
            "namespace": "jetpack\/v4",
            "methods": ["POST", "PUT", "PATCH", "GET"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "edit"
                    },
                    "carousel_background_color": {
                        "required": false,
                        "default": "black",
                        "enum": ["black", "white"],
                        "description": "\u0426\u0432\u0435\u0442\u043e\u0432\u0430\u044f \u0441\u0445\u0435\u043c\u0430.",
                        "type": "string"
                    },
                    "carousel_display_exif": {
                        "required": false,
                        "default": 0,
                        "description": "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043f\u043e\u043a\u0430\u0437 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0439 (<a href=\"http:\/\/en.wikipedia.org\/wiki\/Exchangeable_image_file_format\" target=\"_blank\">Exif<\/a>) \u0432 \u043a\u0430\u0440\u0443\u0441\u0435\u043b\u0438 (\u0435\u0441\u043b\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e).",
                        "type": "boolean"
                    },
                    "highlander_comment_form_prompt": {
                        "required": false,
                        "default": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
                        "description": "\u0422\u0435\u043a\u0441\u0442 \u041f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u044f",
                        "type": "string"
                    },
                    "jetpack_comment_form_color_scheme": {
                        "required": false,
                        "default": "light",
                        "enum": ["light", "dark", "transparent"],
                        "description": "\u0426\u0432\u0435\u0442\u043e\u0432\u0430\u044f \u0441\u0445\u0435\u043c\u0430",
                        "type": "string"
                    },
                    "jetpack_portfolio": {
                        "required": false,
                        "default": 0,
                        "description": "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0438\u043f \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u00ab\u041f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e\u00bb Jetpack.",
                        "type": "boolean"
                    },
                    "jetpack_portfolio_posts_per_page": {
                        "required": false,
                        "default": 10,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445 \u043f\u043e\u0440\u0442\u0444\u043e\u043b\u0438\u043e.",
                        "type": "integer"
                    },
                    "jetpack_testimonial": {
                        "required": false,
                        "default": 0,
                        "description": "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0438\u043b\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0438\u043f \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u00ab\u041e\u0442\u0437\u044b\u0432\u00bb Jetpack.",
                        "type": "boolean"
                    },
                    "jetpack_testimonial_posts_per_page": {
                        "required": false,
                        "default": 10,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445 \u043e\u0442\u0437\u044b\u0432\u043e\u0432.",
                        "type": "integer"
                    },
                    "tiled_galleries": {
                        "required": false,
                        "default": 0,
                        "description": "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043f\u043e\u043a\u0430\u0437 \u0432\u0441\u0435\u0445 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0439 \u0433\u0430\u043b\u0435\u0440\u0435\u0438 \u0432 \u0432\u0438\u0434\u0435 \u043c\u043e\u0437\u0430\u0438\u043a\u0438.",
                        "type": "boolean"
                    },
                    "gravatar_disable_hovercards": {
                        "required": false,
                        "default": "enabled",
                        "enum": ["enabled", "disabled"],
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043f\u0440\u0438 \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0438 \u043a\u0443\u0440\u0441\u043e\u0440\u0430 \u043c\u044b\u0448\u0438 \u043d\u0430 \u0438\u0445 \u0433\u0440\u0430\u0432\u0430\u0442\u0430\u0440\u044b",
                        "type": "string"
                    },
                    "infinite_scroll": {
                        "required": false,
                        "default": 1,
                        "description": "\u0414\u043e \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u043e\u0441\u0442\u0438",
                        "type": "boolean"
                    },
                    "infinite_scroll_google_analytics": {
                        "required": false,
                        "default": 0,
                        "description": "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043b\u044f Google Analytics \u0431\u0435\u0441\u043a\u043e\u043d\u0435\u0447\u043d\u0443\u044e \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0443",
                        "type": "boolean"
                    },
                    "wpl_default": {
                        "required": false,
                        "default": "on",
                        "enum": ["on", "off"],
                        "description": "\u041b\u044e\u0431\u0438\u043c\u043e\u0435 Wordpress.com",
                        "type": "string"
                    },
                    "social_notifications_like": {
                        "required": false,
                        "default": 1,
                        "description": "\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0435, \u043a\u043e\u0433\u0434\u0430 \u043a\u0442\u043e-\u043b\u0438\u0431\u043e \u043d\u0430\u0436\u0438\u043c\u0430\u0435\u0442 \u043a\u043d\u043e\u043f\u043a\u0443 \u00ab\u041d\u0440\u0430\u0432\u0438\u0442\u0441\u044f\u00bb \u043f\u043e\u0434 \u0437\u0430\u043f\u0438\u0441\u044c\u044e",
                        "type": "boolean"
                    },
                    "wpcom_publish_comments_with_markdown": {
                        "required": false,
                        "default": 0,
                        "description": "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 Markdown \u0434\u043b\u044f \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432.",
                        "type": "boolean"
                    },
                    "wpcom_publish_posts_with_markdown": {
                        "required": false,
                        "default": 0,
                        "description": "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0442\u043a\u0443 \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0435\u0439.",
                        "type": "boolean"
                    },
                    "wp_mobile_excerpt": {
                        "required": false,
                        "default": 0,
                        "description": "\u0426\u0438\u0442\u0430\u0442\u044b",
                        "type": "boolean"
                    },
                    "wp_mobile_featured_images": {
                        "required": false,
                        "default": 0,
                        "description": "\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f",
                        "type": "boolean"
                    },
                    "wp_mobile_app_promos": {
                        "required": false,
                        "default": 0,
                        "description": "\u0412\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043f\u043e\u043a\u0430\u0437 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0434\u043b\u044f \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 WordPress \u0432 \u043f\u043e\u0434\u0432\u0430\u043b\u0435 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0442\u0435\u043c\u044b.",
                        "type": "boolean"
                    },
                    "monitor_receive_notifications": {
                        "required": false,
                        "default": 0,
                        "description": "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u0439 \u043f\u043e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u0435.",
                        "type": "boolean"
                    },
                    "post_by_email_address": {
                        "required": false,
                        "default": "noop",
                        "enum": ["noop", "create", "regenerate", "delete"],
                        "description": "E-mail \u0430\u0434\u0440\u0435\u0441",
                        "type": "string"
                    },
                    "jetpack_protect_key": {
                        "required": false,
                        "default": "",
                        "description": "\u0417\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u043a\u043b\u044e\u0447 API",
                        "type": "string"
                    },
                    "jetpack_protect_global_whitelist": {
                        "required": false,
                        "default": "",
                        "description": "\u0417\u0430\u0449\u0438\u0442\u0438\u0442\u044c \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0439",
                        "type": "string"
                    },
                    "sharing_services": {
                        "required": false,
                        "default": {
                            "visible": ["twitter", "facebook", "google-plus-1"],
                            "hidden": []
                        },
                        "description": "\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u0441\u043b\u0443\u0436\u0431\u044b \u0438 \u0441\u043b\u0443\u0436\u0431\u044b, \u0441\u043a\u0440\u044b\u0442\u044b\u0435 \u0437\u0430 \u043a\u043d\u043e\u043f\u043a\u043e\u0439",
                        "type": "object"
                    },
                    "button_style": {
                        "required": false,
                        "default": "icon",
                        "enum": ["icon-text", "icon", "text", "official"],
                        "description": "\u0421\u0442\u0438\u043b\u044c \u043a\u043d\u043e\u043f\u043a\u0438",
                        "type": "string"
                    },
                    "sharing_label": {
                        "required": false,
                        "default": "",
                        "description": "\u042f\u0440\u043b\u044b\u043a",
                        "type": "string"
                    },
                    "show": {
                        "required": false,
                        "default": ["post"],
                        "description": "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b, \u043a\u043e\u0433\u0434\u0430 \u043a\u043d\u043e\u043f\u043a\u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442\u0441\u044f",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "jetpack-twitter-cards-site-tag": {
                        "required": false,
                        "default": "",
                        "description": "\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0441\u0430\u0439\u0442\u0430 \u0432 \u0422\u0432\u0438\u0442\u0442\u0435\u0440\u0435.",
                        "type": "string"
                    },
                    "sharedaddy_disable_resources": {
                        "required": false,
                        "default": 0,
                        "description": "\u0414\u0435\u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c CSS \u0438 JS",
                        "type": "boolean"
                    },
                    "custom": {
                        "required": false,
                        "default": {
                            "sharing_name": "",
                            "sharing_url": "",
                            "sharing_icon": ""
                        },
                        "description": "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0441\u043b\u0443\u0436\u0431\u044b \u043e\u0431\u0449\u0435\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430, \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u043c.",
                        "type": "object"
                    },
                    "sharing_delete_service": {
                        "required": false,
                        "default": "",
                        "description": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0443\u044e \u0441\u043b\u0443\u0436\u0431\u0443 \u043e\u0431\u0449\u0435\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0430.",
                        "type": "string"
                    },
                    "jetpack_sso_require_two_step": {
                        "required": false,
                        "default": 0,
                        "description": "\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u0432\u0443\u0445\u0444\u0430\u043a\u0442\u043e\u0440\u043d\u0430\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f",
                        "type": "boolean"
                    },
                    "jetpack_sso_match_by_email": {
                        "required": false,
                        "default": 0,
                        "description": "\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435 \u043f\u043e \u0430\u0434\u0440\u0435\u0441\u0443 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b",
                        "type": "boolean"
                    },
                    "stb_enabled": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442 &lt;em&gt;&#039;\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0431\u043b\u043e\u0433&#039;&lt;\/em&gt; \u0432 \u0444\u043e\u0440\u043c\u0435 \u0434\u043b\u044f \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",
                        "type": "boolean"
                    },
                    "stc_enabled": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442 &lt;em&gt;&#039;\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438&#039;&lt;\/em&gt; \u0432 \u0444\u043e\u0440\u043c\u0435 \u0434\u043b\u044f \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f",
                        "type": "boolean"
                    },
                    "show_headline": {
                        "required": false,
                        "default": 1,
                        "description": "\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u043c",
                        "type": "boolean"
                    },
                    "show_thumbnails": {
                        "required": false,
                        "default": 0,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u044b, \u0435\u0441\u043b\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e",
                        "type": "boolean"
                    },
                    "onpublish": {
                        "required": false,
                        "default": 0,
                        "description": "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u0440\u0438 \u043f\u0435\u0440\u0432\u043e\u0439 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b.",
                        "type": "boolean"
                    },
                    "onupdate": {
                        "required": false,
                        "default": 0,
                        "description": "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u043b\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b.",
                        "type": "boolean"
                    },
                    "Bias Language": {
                        "required": false,
                        "default": 0,
                        "description": "\u041d\u0435\u043d\u043e\u0440\u043c\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043b\u0435\u043a\u0441\u0438\u043a\u0430",
                        "type": "boolean"
                    },
                    "Cliches": {
                        "required": false,
                        "default": 0,
                        "description": "\u041a\u043b\u0438\u0448\u0435",
                        "type": "boolean"
                    },
                    "Complex Expression": {
                        "required": false,
                        "default": 0,
                        "description": "\u0421\u043b\u043e\u0436\u043d\u044b\u0435 \u0444\u0440\u0430\u0437\u044b",
                        "type": "boolean"
                    },
                    "Diacritical Marks": {
                        "required": false,
                        "default": 0,
                        "description": "\u0414\u0438\u0430\u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u043d\u0430\u043a\u0438",
                        "type": "boolean"
                    },
                    "Double Negative": {
                        "required": false,
                        "default": 0,
                        "description": "\u0414\u0432\u043e\u0439\u043d\u043e\u0435 \u043e\u0442\u0440\u0438\u0446\u0430\u043d\u0438\u0435",
                        "type": "boolean"
                    },
                    "Hidden Verbs": {
                        "required": false,
                        "default": 0,
                        "description": "\u0421\u043a\u0440\u044b\u0442\u044b\u0435 \u0433\u043b\u0430\u0433\u043e\u043b\u044b",
                        "type": "boolean"
                    },
                    "Jargon Language": {
                        "required": false,
                        "default": 0,
                        "description": "\u0416\u0430\u0440\u0433\u043e\u043d",
                        "type": "boolean"
                    },
                    "Passive voice": {
                        "required": false,
                        "default": 0,
                        "description": "\u0421\u0442\u0440\u0430\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0437\u0430\u043b\u043e\u0433",
                        "type": "boolean"
                    },
                    "Phrases to Avoid": {
                        "required": false,
                        "default": 0,
                        "description": "\u0424\u0440\u0430\u0437\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044c",
                        "type": "boolean"
                    },
                    "Redundant Expression": {
                        "required": false,
                        "default": 0,
                        "description": "\u041d\u0435\u043d\u0443\u0436\u043d\u044b\u0435 \u0444\u0440\u0430\u0437\u044b",
                        "type": "boolean"
                    },
                    "guess_lang": {
                        "required": false,
                        "default": 0,
                        "description": "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0439 \u044f\u0437\u044b\u043a \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0433\u0440\u0430\u043c\u043e\u0442\u043d\u043e\u0441\u0442\u0438 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446",
                        "type": "boolean"
                    },
                    "ignored_phrases": {
                        "required": false,
                        "default": "",
                        "description": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0440\u0430\u0437\u0443, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",
                        "type": "string"
                    },
                    "unignore_phrase": {
                        "required": false,
                        "default": "",
                        "description": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0444\u0440\u0430\u0437\u0443 \u0438\u0437 \u0438\u0433\u043d\u043e\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0445",
                        "type": "string"
                    },
                    "google": {
                        "required": false,
                        "default": "",
                        "description": "Google Search Console",
                        "type": "string"
                    },
                    "bing": {
                        "required": false,
                        "default": "",
                        "description": "\u0426\u0435\u043d\u0442\u0440 \u0432\u0435\u0431-\u043c\u0430\u0441\u0442\u0435\u0440\u0430 Bing",
                        "type": "string"
                    },
                    "pinterest": {
                        "required": false,
                        "default": "",
                        "description": "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0441\u0430\u0439\u0442\u043e\u0432 Pinterest",
                        "type": "string"
                    },
                    "yandex": {
                        "required": false,
                        "default": "",
                        "description": "\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u0430 Yandex",
                        "type": "string"
                    },
                    "enable_header_ad": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043d\u0430\u0432\u0435\u0440\u0445\u0443 \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b.",
                        "type": "boolean"
                    },
                    "wordads_approved": {
                        "required": false,
                        "default": 0,
                        "description": "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043b\u0438 \u044d\u0442\u043e\u0442 \u0441\u0430\u0439\u0442 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0443 WordAds?",
                        "type": "boolean"
                    },
                    "wordads_second_belowpost": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u0442\u043e\u0440\u043e\u0439 \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0439 \u0431\u043b\u043e\u043a \u043d\u0438\u0436\u0435 \u0437\u0430\u043f\u0438\u0441\u0438?",
                        "type": "boolean"
                    },
                    "wordads_display_front_page": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u043e\u0439?",
                        "type": "boolean"
                    },
                    "wordads_display_post": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u0432 \u0437\u0430\u043f\u0438\u0441\u044f\u0445?",
                        "type": "boolean"
                    },
                    "wordads_display_page": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445?",
                        "type": "boolean"
                    },
                    "wordads_display_archive": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445 \u0430\u0440\u0445\u0438\u0432\u043e\u0432?",
                        "type": "boolean"
                    },
                    "google_analytics_tracking_id": {
                        "required": false,
                        "default": "",
                        "description": "Google Analytics",
                        "type": "string"
                    },
                    "admin_bar": {
                        "required": false,
                        "default": 1,
                        "description": "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0433\u0440\u0430\u0444\u0438\u043a \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 48 \u0447\u0430\u0441\u043e\u0432 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432 \u0432 \u043f\u0430\u043d\u0435\u043b\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430.",
                        "type": "boolean"
                    },
                    "roles": {
                        "required": false,
                        "default": ["administrator"],
                        "description": "\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u043e\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044c \u043e\u0442\u0447\u0451\u0442\u044b \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "count_roles": {
                        "required": false,
                        "default": ["administrator"],
                        "description": "\u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b \u0441\u0442\u0440\u0430\u043d\u0438\u0446, \u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0451\u043d\u043d\u044b\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "blog_id": {
                        "required": false,
                        "default": 0,
                        "description": "\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0431\u043b\u043e\u0433\u0430.",
                        "type": "boolean"
                    },
                    "do_not_track": {
                        "required": false,
                        "default": 1,
                        "description": "\u041d\u0435 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c.",
                        "type": "boolean"
                    },
                    "hide_smile": {
                        "required": false,
                        "default": 1,
                        "description": "\u0421\u043a\u0440\u044b\u0442\u044c \u0441\u043c\u0430\u0439\u043b\u0438\u043a \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438.",
                        "type": "boolean"
                    },
                    "version": {
                        "required": false,
                        "default": 9,
                        "description": "\u0412\u0435\u0440\u0441\u0438\u044f.",
                        "type": "integer"
                    },
                    "akismet_show_user_comments_approved": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "wordpress_api_key": {
                        "required": false,
                        "default": "",
                        "description": "",
                        "type": "string"
                    },
                    "dismiss_dash_app_card": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "dismiss_empty_stats_card": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "lang_id": {
                        "required": false,
                        "default": "en_US",
                        "description": "\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u044f\u0437\u044b\u043a \u0441\u0430\u0439\u0442\u0430",
                        "type": "string"
                    },
                    "onboarding": {
                        "required": false,
                        "default": {
                            "siteTitle": "",
                            "siteDescription": "",
                            "siteType": "personal",
                            "homepageFormat": "posts",
                            "addContactForm": 0,
                            "businessAddress": {
                                "name": "",
                                "street": "",
                                "city": "",
                                "state": "",
                                "zip": ""
                            },
                            "installWooCommerce": false
                        },
                        "description": "",
                        "type": "object"
                    },
                    "show_welcome_for_new_plan": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "after-the-deadline": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "carousel": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "comment-likes": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "comments": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "contact-form": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "custom-content-types": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "custom-css": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "enhanced-distribution": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "google-analytics": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "gravatar-hovercards": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "infinite-scroll": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "json-api": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "latex": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "lazy-images": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "likes": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "manage": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "markdown": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "masterbar": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "minileven": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "monitor": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "notes": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "photon": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "post-by-email": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "protect": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "publicize": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "pwa": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "related-posts": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "search": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "seo-tools": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "sharedaddy": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "shortcodes": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "shortlinks": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "sitemaps": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "sso": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "stats": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "subscriptions": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "tiled-gallery": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "vaultpress": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "verification-tools": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "videopress": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "widget-visibility": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "widgets": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    },
                    "wordads": {
                        "required": false,
                        "default": 0,
                        "description": "",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/settings"
            }
        },
        "\/jetpack\/v4\/settings\/(?P<slug>[a-z\\-]+)": {
            "namespace": "jetpack\/v4",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "edit"
                    }
                }
            }]
        },
        "\/jetpack\/v4\/options\/(?P<options>[a-z\\-]+)": {
            "namespace": "jetpack\/v4",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": []
            }]
        },
        "\/jetpack\/v4\/jumpstart": {
            "namespace": "jetpack\/v4",
            "methods": ["GET", "POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "active": {
                        "required": true
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/jumpstart"
            }
        },
        "\/jetpack\/v4\/updates\/plugins": {
            "namespace": "jetpack\/v4",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/updates\/plugins"
            }
        },
        "\/jetpack\/v4\/notice\/(?P<notice>[a-z\\-_]+)": {
            "namespace": "jetpack\/v4",
            "methods": ["POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["POST", "PUT", "PATCH"],
                "args": []
            }]
        },
        "\/jetpack\/v4\/plugins": {
            "namespace": "jetpack\/v4",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/jetpack\/v4\/plugins"
            }
        },
        "\/jetpack\/v4\/plugin\/(?P<plugin>[a-z\\\/\\.\\-_]+)": {
            "namespace": "jetpack\/v4",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }]
        },
        "\/jetpack\/v4\/widgets\/(?P<id>[0-9a-z\\-_]+)": {
            "namespace": "jetpack\/v4",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }]
        },
        "\/yoast\/v1": {
            "namespace": "yoast\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "namespace": {
                        "required": false,
                        "default": "yoast\/v1"
                    },
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/yoast\/v1"
            }
        },
        "\/yoast\/v1\/configurator": {
            "namespace": "yoast\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/yoast\/v1\/configurator"
            }
        },
        "\/yoast\/v1\/reindex_posts": {
            "namespace": "yoast\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/yoast\/v1\/reindex_posts"
            }
        },
        "\/yoast\/v1\/ryte": {
            "namespace": "yoast\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/yoast\/v1\/ryte"
            }
        },
        "\/yoast\/v1\/indexables\/(?P<object_type>.*)\/(?P<object_id>\\d+)": {
            "namespace": "yoast\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }]
        },
        "\/yoast\/v1\/statistics": {
            "namespace": "yoast\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/yoast\/v1\/statistics"
            }
        },
        "\/wp-super-cache\/v1": {
            "namespace": "wp-super-cache\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "namespace": {
                        "required": false,
                        "default": "wp-super-cache\/v1"
                    },
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp-super-cache\/v1"
            }
        },
        "\/wp-super-cache\/v1\/settings": {
            "namespace": "wp-super-cache\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp-super-cache\/v1\/settings"
            }
        },
        "\/wp-super-cache\/v1\/status": {
            "namespace": "wp-super-cache\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp-super-cache\/v1\/status"
            }
        },
        "\/wp-super-cache\/v1\/stats": {
            "namespace": "wp-super-cache\/v1",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp-super-cache\/v1\/stats"
            }
        },
        "\/wp-super-cache\/v1\/cache": {
            "namespace": "wp-super-cache\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp-super-cache\/v1\/cache"
            }
        },
        "\/wp-super-cache\/v1\/preload": {
            "namespace": "wp-super-cache\/v1",
            "methods": ["POST"],
            "endpoints": [{
                "methods": ["POST"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp-super-cache\/v1\/preload"
            }
        },
        "\/wp-super-cache\/v1\/cache\/test": {
            "namespace": "wp-super-cache\/v1",
            "methods": ["POST"],
            "endpoints": [{
                "methods": ["POST"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp-super-cache\/v1\/cache\/test"
            }
        },
        "\/wp-super-cache\/v1\/plugins": {
            "namespace": "wp-super-cache\/v1",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST"],
                "args": []
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp-super-cache\/v1\/plugins"
            }
        },
        "\/wp\/v2": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "namespace": {
                        "required": false,
                        "default": "wp\/v2"
                    },
                    "context": {
                        "required": false,
                        "default": "view"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp\/v2"
            }
        },
        "\/wp\/v2\/posts": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0435.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0434\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0445 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u043e\u0439.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 ISO8601 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0439 \u0434\u0430\u0442\u044b. ",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0430\u0432\u0442\u043e\u0440\u043e\u0432.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0430\u0432\u0442\u043e\u0440\u0430\u043c.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0434\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 ISO8601 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0439 \u0434\u0430\u0442\u044b.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "\u0421\u0434\u0432\u0438\u0433 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e \u0438\u043b\u0438 \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "include_slugs", "title"],
                        "description": "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e \u043f\u043e \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u043c\u0438 \u044f\u0440\u043b\u044b\u043a\u0430\u043c\u0438.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430\u043c\u0438.",
                        "type": "array",
                        "items": {
                            "enum": ["publish", "future", "draft", "pending", "private", "trash", "auto-draft", "inherit", "request-pending", "request-confirmed", "request-failed", "request-completed", "spam", "any"],
                            "type": "string"
                        }
                    },
                    "categories": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c \u0432 \u0442\u0430\u043a\u0441\u043e\u043d\u043e\u043c\u0438\u0438 categories.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "categories_exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u0432\u0441\u0435\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043a\u0440\u043e\u043c\u0435 \u0442\u0435\u0445, \u0447\u0442\u043e \u0438\u043c\u0435\u044e\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u043a\u0441\u043e\u043d\u043e\u043c\u0438\u0438 categories.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0441 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u043c \u0432 \u0442\u0430\u043a\u0441\u043e\u043d\u043e\u043c\u0438\u0438 tags.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags_exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u0432\u0441\u0435\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u043a\u0440\u043e\u043c\u0435 \u0442\u0435\u0445, \u0447\u0442\u043e \u0438\u043c\u0435\u044e\u0442 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u0432 \u0442\u0430\u043a\u0441\u043e\u043d\u043e\u043c\u0438\u0438 tags.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "sticky": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u043f\u0440\u0438\u043b\u0435\u043f\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438.",
                        "type": "boolean"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0437\u043e\u043d\u0435 \u0441\u0430\u0439\u0442\u0430.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "\u0412\u0440\u0435\u043c\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u043b\u044f \u0435\u0433\u043e \u0442\u0438\u043f\u0430.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "spam"],
                        "description": "\u0418\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f \u0438 \u043e\u0442\u0440\u044b\u0432\u043a\u0430.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "ID \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "\u041e\u0442\u0440\u044b\u0432\u043e\u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "ID \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0434\u0438\u0430 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "\u041e\u0442\u043a\u0440\u044b\u0442\u044b \u043b\u0438 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f.",
                        "type": "string"
                    },
                    "format": {
                        "required": false,
                        "enum": ["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"],
                        "description": "\u0424\u043e\u0440\u043c\u0430\u0442 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    },
                    "sticky": {
                        "required": false,
                        "description": "\u0421\u0447\u0438\u0442\u0430\u0442\u044c \u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u043f\u0440\u0438\u043b\u0435\u043f\u043b\u0435\u043d\u043d\u044b\u043c \u0438\u043b\u0438 \u043d\u0435\u0442.",
                        "type": "boolean"
                    },
                    "template": {
                        "required": false,
                        "description": "\u0424\u0430\u0439\u043b \u0442\u0435\u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0443 \u0432 \u0442\u0430\u043a\u0441\u043e\u043d\u043e\u043c\u0438\u0438 category.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0443 \u0432 \u0442\u0430\u043a\u0441\u043e\u043d\u043e\u043c\u0438\u0438 post_tag.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp\/v2\/posts"
            }
        },
        "\/wp\/v2\/posts\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438, \u0435\u0441\u043b\u0438 \u043e\u043d\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0435\u043c.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0437\u043e\u043d\u0435 \u0441\u0430\u0439\u0442\u0430.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "\u0412\u0440\u0435\u043c\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u043b\u044f \u0435\u0433\u043e \u0442\u0438\u043f\u0430.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "spam"],
                        "description": "\u0418\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f \u0438 \u043e\u0442\u0440\u044b\u0432\u043a\u0430.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "ID \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "\u041e\u0442\u0440\u044b\u0432\u043e\u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "ID \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0434\u0438\u0430 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "\u041e\u0442\u043a\u0440\u044b\u0442\u044b \u043b\u0438 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f.",
                        "type": "string"
                    },
                    "format": {
                        "required": false,
                        "enum": ["standard", "aside", "chat", "gallery", "link", "image", "quote", "status", "video", "audio"],
                        "description": "\u0424\u043e\u0440\u043c\u0430\u0442 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    },
                    "sticky": {
                        "required": false,
                        "description": "\u0421\u0447\u0438\u0442\u0430\u0442\u044c \u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u043f\u0440\u0438\u043b\u0435\u043f\u043b\u0435\u043d\u043d\u044b\u043c \u0438\u043b\u0438 \u043d\u0435\u0442.",
                        "type": "boolean"
                    },
                    "template": {
                        "required": false,
                        "description": "\u0424\u0430\u0439\u043b \u0442\u0435\u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "categories": {
                        "required": false,
                        "description": "\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0443 \u0432 \u0442\u0430\u043a\u0441\u043e\u043d\u043e\u043c\u0438\u0438 category.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "tags": {
                        "required": false,
                        "description": "\u042d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0443 \u0432 \u0442\u0430\u043a\u0441\u043e\u043d\u043e\u043c\u0438\u0438 post_tag.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043b\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 \u0438 \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0434\u0430\u043b\u044f\u0442\u044c.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/revisions": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/posts\/(?P<parent>[\\d]+)\/revisions\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0438\u0441\u0442\u0438\u043d\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0440\u0435\u0432\u0438\u0437\u0438\u0438 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443. ",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/pages": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0435.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0434\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0445 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u043e\u0439.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 ISO8601 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0439 \u0434\u0430\u0442\u044b. ",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0430\u0432\u0442\u043e\u0440\u043e\u0432.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0430\u0432\u0442\u043e\u0440\u0430\u043c.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0434\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 ISO8601 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0439 \u0434\u0430\u0442\u044b.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "menu_order": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c menu_order.",
                        "type": "integer"
                    },
                    "offset": {
                        "required": false,
                        "description": "\u0421\u0434\u0432\u0438\u0433 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e \u0438\u043b\u0438 \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "include_slugs", "title", "menu_order"],
                        "description": "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e \u043f\u043e \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0438\u043c\u0435\u044e\u0449\u0438\u0445 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "slug": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u043c\u0438 \u044f\u0440\u043b\u044b\u043a\u0430\u043c\u0438.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430\u043c\u0438.",
                        "type": "array",
                        "items": {
                            "enum": ["publish", "future", "draft", "pending", "private", "trash", "auto-draft", "inherit", "request-pending", "request-confirmed", "request-failed", "request-completed", "spam", "any"],
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0437\u043e\u043d\u0435 \u0441\u0430\u0439\u0442\u0430.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "\u0412\u0440\u0435\u043c\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u043b\u044f \u0435\u0433\u043e \u0442\u0438\u043f\u0430.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "spam"],
                        "description": "\u0418\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f \u0438 \u043e\u0442\u0440\u044b\u0432\u043a\u0430.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "title": {
                        "required": false,
                        "description": "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "ID \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "\u041e\u0442\u0440\u044b\u0432\u043e\u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "ID \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0434\u0438\u0430 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "\u041e\u0442\u043a\u0440\u044b\u0442\u044b \u043b\u0438 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043f\u043e \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044e \u043a \u0434\u0440\u0443\u0433\u0438\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c \u0442\u043e\u0433\u043e \u0436\u0435 \u0442\u0438\u043f\u0430.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "description": "\u0424\u0430\u0439\u043b \u0442\u0435\u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp\/v2\/pages"
            }
        },
        "\/wp\/v2\/pages\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438, \u0435\u0441\u043b\u0438 \u043e\u043d\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0435\u043c.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0437\u043e\u043d\u0435 \u0441\u0430\u0439\u0442\u0430.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "\u0412\u0440\u0435\u043c\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u043b\u044f \u0435\u0433\u043e \u0442\u0438\u043f\u0430.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "spam"],
                        "description": "\u0418\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f \u0438 \u043e\u0442\u0440\u044b\u0432\u043a\u0430.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "title": {
                        "required": false,
                        "description": "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "ID \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "excerpt": {
                        "required": false,
                        "description": "\u041e\u0442\u0440\u044b\u0432\u043e\u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "featured_media": {
                        "required": false,
                        "description": "ID \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0434\u0438\u0430 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "\u041e\u0442\u043a\u0440\u044b\u0442\u044b \u043b\u0438 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f.",
                        "type": "string"
                    },
                    "menu_order": {
                        "required": false,
                        "description": "\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043f\u043e \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044e \u043a \u0434\u0440\u0443\u0433\u0438\u043c \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c \u0442\u043e\u0433\u043e \u0436\u0435 \u0442\u0438\u043f\u0430.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "description": "\u0424\u0430\u0439\u043b \u0442\u0435\u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043b\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 \u0438 \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0434\u0430\u043b\u044f\u0442\u044c.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/revisions": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/pages\/(?P<parent>[\\d]+)\/revisions\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "parent": {
                        "required": false,
                        "description": "ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0438\u0441\u0442\u0438\u043d\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u0440\u0435\u0432\u0438\u0437\u0438\u0438 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443. ",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/media": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0435.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0434\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0445 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u043e\u0439.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 ISO8601 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0439 \u0434\u0430\u0442\u044b. ",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0430\u0432\u0442\u043e\u0440\u043e\u0432.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0430\u0432\u0442\u043e\u0440\u0430\u043c.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "before": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0434\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 ISO8601 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0439 \u0434\u0430\u0442\u044b.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "\u0421\u0434\u0432\u0438\u0433 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e \u0438\u043b\u0438 \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "include_slugs", "title"],
                        "description": "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e \u043f\u043e \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u0435\u0439.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0438\u043c\u0435\u044e\u0449\u0438\u0445 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "slug": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u043c\u0438 \u044f\u0440\u043b\u044b\u043a\u0430\u043c\u0438.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "inherit",
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430\u043c\u0438.",
                        "type": "array",
                        "items": {
                            "enum": ["inherit", "private", "trash"],
                            "type": "string"
                        }
                    },
                    "media_type": {
                        "required": false,
                        "enum": ["image", "video", "text", "application", "audio"],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u043c\u0435\u0434\u0438\u0430.",
                        "type": "string"
                    },
                    "mime_type": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e MIME \u0442\u0438\u043f\u0430.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0437\u043e\u043d\u0435 \u0441\u0430\u0439\u0442\u0430.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "\u0412\u0440\u0435\u043c\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u043b\u044f \u0435\u0433\u043e \u0442\u0438\u043f\u0430.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "spam"],
                        "description": "\u0418\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "ID \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "\u041e\u0442\u043a\u0440\u044b\u0442\u044b \u043b\u0438 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "description": "\u0424\u0430\u0439\u043b \u0442\u0435\u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "alt_text": {
                        "required": false,
                        "description": "\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u043a\u043e\u0433\u0434\u0430 \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f.",
                        "type": "string"
                    },
                    "caption": {
                        "required": false,
                        "description": "\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",
                        "type": "object"
                    },
                    "description": {
                        "required": false,
                        "description": "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",
                        "type": "object"
                    },
                    "post": {
                        "required": false,
                        "description": "ID \u0434\u043b\u044f \u0430\u0441\u0441\u043e\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u043d\u044b\u0445 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0434\u043b\u044f \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp\/v2\/media"
            }
        },
        "\/wp\/v2\/media\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0437\u043e\u043d\u0435 \u0441\u0430\u0439\u0442\u0430.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "\u0412\u0440\u0435\u043c\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u043b\u044f \u0435\u0433\u043e \u0442\u0438\u043f\u0430.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "spam"],
                        "description": "\u0418\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "author": {
                        "required": false,
                        "description": "ID \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "\u041e\u0442\u043a\u0440\u044b\u0442\u044b \u043b\u0438 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "\u041f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442 \u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "description": "\u0424\u0430\u0439\u043b \u0442\u0435\u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "alt_text": {
                        "required": false,
                        "description": "\u0410\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u043a\u043e\u0433\u0434\u0430 \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043d\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f.",
                        "type": "string"
                    },
                    "caption": {
                        "required": false,
                        "description": "\u041f\u043e\u0434\u043f\u0438\u0441\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",
                        "type": "object"
                    },
                    "description": {
                        "required": false,
                        "description": "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",
                        "type": "object"
                    },
                    "post": {
                        "required": false,
                        "description": "ID \u0434\u043b\u044f \u0430\u0441\u0441\u043e\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u043d\u044b\u0445 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0434\u043b\u044f \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",
                        "type": "integer"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043b\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 \u0438 \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0434\u0430\u043b\u044f\u0442\u044c.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/feedback": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0435.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0434\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0445 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u043e\u0439.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 ISO8601 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0439 \u0434\u0430\u0442\u044b. ",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u044f\u043c\u0438 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0434\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 ISO8601 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0439 \u0434\u0430\u0442\u044b.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "\u0421\u0434\u0432\u0438\u0433 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e \u0438\u043b\u0438 \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date",
                        "enum": ["author", "date", "id", "include", "modified", "parent", "relevance", "slug", "include_slugs", "title"],
                        "description": "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e \u043f\u043e \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u043c\u0438 \u044f\u0440\u043b\u044b\u043a\u0430\u043c\u0438.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "publish",
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0442\u0430\u0442\u0443\u0441\u0430\u043c\u0438.",
                        "type": "array",
                        "items": {
                            "enum": ["publish", "future", "draft", "pending", "private", "trash", "auto-draft", "inherit", "request-pending", "request-confirmed", "request-failed", "request-completed", "spam", "any"],
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "date": {
                        "required": false,
                        "description": "\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0437\u043e\u043d\u0435 \u0441\u0430\u0439\u0442\u0430.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "\u0412\u0440\u0435\u043c\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u043b\u044f \u0435\u0433\u043e \u0442\u0438\u043f\u0430.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "spam"],
                        "description": "\u0418\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f \u0438 \u043e\u0442\u0440\u044b\u0432\u043a\u0430.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "description": "\u0424\u0430\u0439\u043b \u0442\u0435\u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp\/v2\/feedback"
            }
        },
        "\/wp\/v2\/feedback\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438, \u0435\u0441\u043b\u0438 \u043e\u043d\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0435\u043c.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "date": {
                        "required": false,
                        "description": "\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0437\u043e\u043d\u0435 \u0441\u0430\u0439\u0442\u0430.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "\u0412\u0440\u0435\u043c\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e GMT.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u043b\u044f \u0435\u0433\u043e \u0442\u0438\u043f\u0430.",
                        "type": "string"
                    },
                    "status": {
                        "required": false,
                        "enum": ["publish", "future", "draft", "pending", "private", "spam"],
                        "description": "\u0418\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u0442\u0430\u0442\u0443\u0441 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0437\u0430\u0449\u0438\u0442\u044b \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f \u0438 \u043e\u0442\u0440\u044b\u0432\u043a\u0430.",
                        "type": "string"
                    },
                    "title": {
                        "required": false,
                        "description": "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "content": {
                        "required": false,
                        "description": "\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "template": {
                        "required": false,
                        "description": "\u0424\u0430\u0439\u043b \u0442\u0435\u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043b\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 \u0438 \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0434\u0430\u043b\u044f\u0442\u044c.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/types": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp\/v2\/types"
            }
        },
        "\/wp\/v2\/types\/(?P<type>[\\w-]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "type": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0442\u0438\u043f\u0430 \u0437\u0430\u043f\u0438\u0441\u0438.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/statuses": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp\/v2\/statuses"
            }
        },
        "\/wp\/v2\/statuses\/(?P<status>[\\w-]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "status": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0441\u0442\u0430\u0442\u0443\u0441\u0430.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/taxonomies": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0442\u0430\u043a\u0441\u043e\u043d\u043e\u043c\u0438\u044f\u043c\u0438 \u0430\u0441\u0441\u043e\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0442\u0438\u043f\u043e\u043c \u0437\u0430\u043f\u0438\u0441\u0438.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp\/v2\/taxonomies"
            }
        },
        "\/wp\/v2\/taxonomies\/(?P<taxonomy>[\\w-]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "taxonomy": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0442\u0430\u043a\u0441\u043e\u043d\u043e\u043c\u0438\u0438.",
                        "type": "string"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/categories": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0435.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0434\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0445 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u043e\u0439.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e \u0438\u043b\u0438 \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "include_slugs", "term_group", "description", "count"],
                        "description": "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e \u043f\u043e \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "\u0421\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u043b\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438.",
                        "type": "boolean"
                    },
                    "parent": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c\u0443 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044e.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u044f\u0440\u043b\u044b\u043a\u0430\u043c\u0438. ",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "description": {
                        "required": false,
                        "description": "HTML \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "string"
                    },
                    "name": {
                        "required": true,
                        "description": "HTML \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u043b\u044f \u0435\u0433\u043e \u0442\u0438\u043f\u0430.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "ID \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp\/v2\/categories"
            }
        },
        "\/wp\/v2\/categories\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "HTML \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u043b\u044f \u0435\u0433\u043e \u0442\u0438\u043f\u0430.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "ID \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f.",
                        "type": "integer"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0438\u0441\u0442\u0438\u043d\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/tags": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0435.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0434\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0445 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u043e\u0439.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "\u0421\u0434\u0432\u0438\u0433 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e \u0438\u043b\u0438 \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "slug", "include_slugs", "term_group", "description", "count"],
                        "description": "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e \u043f\u043e \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "string"
                    },
                    "hide_empty": {
                        "required": false,
                        "default": false,
                        "description": "\u0421\u043a\u0440\u044b\u0432\u0430\u0442\u044c \u043b\u0438 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0435 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043d\u0438 \u043e\u0434\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438.",
                        "type": "boolean"
                    },
                    "post": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438.",
                        "type": "integer"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u044f\u0440\u043b\u044b\u043a\u0430\u043c\u0438. ",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "description": {
                        "required": false,
                        "description": "HTML \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "string"
                    },
                    "name": {
                        "required": true,
                        "description": "HTML \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u043b\u044f \u0435\u0433\u043e \u0442\u0438\u043f\u0430.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp\/v2\/tags"
            }
        },
        "\/wp\/v2\/tags\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "integer"
                    },
                    "description": {
                        "required": false,
                        "description": "HTML \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "HTML \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u043b\u044f \u0435\u0433\u043e \u0442\u0438\u043f\u0430.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0438\u0441\u0442\u0438\u043d\u043d\u043e, \u0442\u0430\u043a \u043a\u0430\u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443.",
                        "type": "boolean"
                    }
                }
            }]
        },
        "\/wp\/v2\/users": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0435.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0434\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0445 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u043e\u0439.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "\u0421\u0434\u0432\u0438\u0433 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "asc",
                        "enum": ["asc", "desc"],
                        "description": "\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e \u0438\u043b\u0438 \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "name",
                        "enum": ["id", "include", "name", "registered_date", "slug", "include_slugs", "email", "url"],
                        "description": "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e \u043f\u043e \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438 \u0441 \u043e\u0434\u043d\u0438\u043c \u0438\u043b\u0438 \u0431\u043e\u043b\u0435\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u044f\u0440\u043b\u044b\u043a\u0430\u043c\u0438.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "roles": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u044f\u044e\u0449\u0438\u0445 \u043a\u0430\u043a \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u043e\u0434\u043d\u043e\u0439 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u0439 \u0440\u043e\u043b\u0438. \u041c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c CSV \u0441\u043f\u0438\u0441\u043e\u043a \u0438\u043b\u0438 \u043e\u0434\u043d\u0443 \u0440\u043e\u043b\u044c.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "who": {
                        "required": false,
                        "enum": ["authors"],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438-\u0430\u0432\u0442\u043e\u0440\u0430\u043c\u0438.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "username": {
                        "required": true,
                        "description": "\u0418\u043c\u044f \u0432\u0445\u043e\u0434\u0430 \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u043e\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "email": {
                        "required": true,
                        "description": "\u0410\u0434\u0440\u0435\u0441 e-mail \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "URL \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US", "ru_RU"],
                        "description": "\u041b\u043e\u043a\u0430\u043b\u044c \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "\u041d\u0438\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "\u0420\u043e\u043b\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": true,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f (\u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp\/v2\/users"
            }
        },
        "\/wp\/v2\/users\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "integer"
                    },
                    "username": {
                        "required": false,
                        "description": "\u0418\u043c\u044f \u0432\u0445\u043e\u0434\u0430 \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u043e\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "\u0410\u0434\u0440\u0435\u0441 e-mail \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "URL \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US", "ru_RU"],
                        "description": "\u041b\u043e\u043a\u0430\u043b\u044c \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "\u041d\u0438\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "\u0420\u043e\u043b\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": false,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f (\u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0438\u0441\u0442\u0438\u043d\u043d\u044b\u043c, \u0442\u0430\u043a \u043a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443.",
                        "type": "boolean"
                    },
                    "reassign": {
                        "required": true,
                        "description": "\u041f\u0435\u0440\u0435\u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u044d\u0442\u043e\u0442 ID \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "integer"
                    }
                }
            }]
        },
        "\/wp\/v2\/users\/me": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "username": {
                        "required": false,
                        "description": "\u0418\u043c\u044f \u0432\u0445\u043e\u0434\u0430 \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "name": {
                        "required": false,
                        "description": "\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u043e\u0435 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "first_name": {
                        "required": false,
                        "description": "\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "last_name": {
                        "required": false,
                        "description": "\u0424\u0430\u043c\u0438\u043b\u0438\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "\u0410\u0434\u0440\u0435\u0441 e-mail \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "URL \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "locale": {
                        "required": false,
                        "enum": ["", "en_US", "ru_RU"],
                        "description": "\u041b\u043e\u043a\u0430\u043b\u044c \u0434\u043b\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "nickname": {
                        "required": false,
                        "description": "\u041d\u0438\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "slug": {
                        "required": false,
                        "description": "\u0411\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "string"
                    },
                    "roles": {
                        "required": false,
                        "description": "\u0420\u043e\u043b\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e.",
                        "type": "array",
                        "items": {
                            "type": "string"
                        }
                    },
                    "password": {
                        "required": false,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f (\u043d\u0438\u043a\u043e\u0433\u0434\u0430 \u043d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f).",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0438\u0441\u0442\u0438\u043d\u043d\u044b\u043c, \u0442\u0430\u043a \u043a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043d\u0435\u043b\u044c\u0437\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443.",
                        "type": "boolean"
                    },
                    "reassign": {
                        "required": true,
                        "description": "\u041f\u0435\u0440\u0435\u043d\u0430\u0437\u043d\u0430\u0447\u0438\u0442\u044c \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u044d\u0442\u043e\u0442 ID \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f.",
                        "type": "integer"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp\/v2\/users\/me"
            }
        },
        "\/wp\/v2\/comments": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    },
                    "page": {
                        "required": false,
                        "default": 1,
                        "description": "\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438.",
                        "type": "integer"
                    },
                    "per_page": {
                        "required": false,
                        "default": 10,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0432 \u0432\u044b\u0431\u043e\u0440\u043a\u0435.",
                        "type": "integer"
                    },
                    "search": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u0434\u043e \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0445 \u0441\u043e \u0441\u0442\u0440\u043e\u043a\u043e\u0439.",
                        "type": "string"
                    },
                    "after": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f\u043c\u0438 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 ISO8601 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0439 \u0434\u0430\u0442\u044b.",
                        "type": "string"
                    },
                    "author": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f\u043c\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c\u0443 ID \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0422\u0440\u0435\u0431\u0443\u0435\u0442 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_exclude": {
                        "required": false,
                        "description": "\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u043c\u0443 ID \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f. \u0422\u0440\u0435\u0431\u0443\u0435\u0442 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "author_email": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u0438\u043c\u0435\u044e\u0449\u0435\u0439 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0439 e-mail \u0430\u0432\u0442\u043e\u0440\u0430. \u0422\u0440\u0435\u0431\u0443\u0435\u0442 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438.",
                        "type": "string"
                    },
                    "before": {
                        "required": false,
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f\u043c\u0438 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0434\u043e \u0437\u0430\u0434\u0430\u043d\u043d\u043e\u0439 ISO8601 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0439 \u0434\u0430\u0442\u044b.",
                        "type": "string"
                    },
                    "exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "include": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u0434\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "offset": {
                        "required": false,
                        "description": "\u0421\u0434\u0432\u0438\u0433 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u043d\u0430 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u0447\u0438\u0441\u043b\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432.",
                        "type": "integer"
                    },
                    "order": {
                        "required": false,
                        "default": "desc",
                        "enum": ["asc", "desc"],
                        "description": "\u0423\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e \u0438\u043b\u0438 \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e.",
                        "type": "string"
                    },
                    "orderby": {
                        "required": false,
                        "default": "date_gmt",
                        "enum": ["date", "date_gmt", "id", "include", "post", "parent", "type"],
                        "description": "\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e \u043f\u043e \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0443 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f\u043c\u0438 \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u043c\u0438 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "parent_exclude": {
                        "required": false,
                        "default": [],
                        "description": "\u0423\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f \u0447\u0442\u043e \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0435 \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 ID.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "post": {
                        "required": false,
                        "default": [],
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f\u043c\u0438 \u0441 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044b\u043c\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c\u0438 ID \u0437\u0430\u043f\u0438\u0441\u0435\u0439.",
                        "type": "array",
                        "items": {
                            "type": "integer"
                        }
                    },
                    "status": {
                        "required": false,
                        "default": "approve",
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f\u043c\u0438 \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0441\u0442\u0430\u0442\u0443\u0441\u043e\u043c. \u0422\u0440\u0435\u0431\u0443\u0435\u0442 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438. ",
                        "type": "string"
                    },
                    "type": {
                        "required": false,
                        "default": "comment",
                        "description": "\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u0431\u043e\u0440\u043a\u0443 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f\u043c\u0438 \u0441 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c \u0442\u0438\u043f\u043e\u043c. \u0422\u0440\u0435\u0431\u0443\u0435\u0442 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438, \u0435\u0441\u043b\u0438 \u043e\u043d\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0435\u043c.",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST"],
                "args": {
                    "author": {
                        "required": false,
                        "description": "ID \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0435\u0441\u043b\u0438 \u0430\u0432\u0442\u043e\u0440 - \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c.",
                        "type": "integer"
                    },
                    "author_email": {
                        "required": false,
                        "description": "\u0410\u0434\u0440\u0435\u0441 e-mail \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "author_ip": {
                        "required": false,
                        "description": "IP \u0430\u0434\u0440\u0435\u0441 \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "author_name": {
                        "required": false,
                        "description": "\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u043e\u0435 \u0438\u043c\u044f \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "author_url": {
                        "required": false,
                        "description": "URL \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "author_user_agent": {
                        "required": false,
                        "description": "\u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "content": {
                        "required": false,
                        "description": "\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "date": {
                        "required": false,
                        "description": "\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0437\u043e\u043d\u0435 \u0441\u0430\u0439\u0442\u0430.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "\u0412\u0440\u0435\u043c\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e GMT.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "default": 0,
                        "description": "ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "default": 0,
                        "description": "ID \u0430\u0441\u0441\u043e\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0437\u0430\u043f\u0438\u0441\u0438.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "description": "\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp\/v2\/comments"
            }
        },
        "\/wp\/v2\/comments\/(?P<id>[\\d]+)": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH", "DELETE"],
            "endpoints": [{
                "methods": ["GET"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "context": {
                        "required": false,
                        "default": "view",
                        "enum": ["view", "embed", "edit"],
                        "description": "\u0420\u0430\u043c\u043a\u0438 \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u0434\u0435\u043b\u0430\u043d \u0437\u0430\u043f\u0440\u043e\u0441, \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u043f\u043e\u043b\u044f \u0432 \u043e\u0442\u0432\u0435\u0442\u0435.",
                        "type": "string"
                    },
                    "password": {
                        "required": false,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f (\u0435\u0441\u043b\u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0435\u043c).",
                        "type": "string"
                    }
                }
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "author": {
                        "required": false,
                        "description": "ID \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u0435\u0441\u043b\u0438 \u0430\u0432\u0442\u043e\u0440 - \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c.",
                        "type": "integer"
                    },
                    "author_email": {
                        "required": false,
                        "description": "\u0410\u0434\u0440\u0435\u0441 e-mail \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "author_ip": {
                        "required": false,
                        "description": "IP \u0430\u0434\u0440\u0435\u0441 \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "author_name": {
                        "required": false,
                        "description": "\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u043e\u0435 \u0438\u043c\u044f \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "author_url": {
                        "required": false,
                        "description": "URL \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "author_user_agent": {
                        "required": false,
                        "description": "\u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0430\u0432\u0442\u043e\u0440\u0430 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "content": {
                        "required": false,
                        "description": "\u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "object"
                    },
                    "date": {
                        "required": false,
                        "description": "\u0414\u0430\u0442\u0430 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0437\u043e\u043d\u0435 \u0441\u0430\u0439\u0442\u0430.",
                        "type": "string"
                    },
                    "date_gmt": {
                        "required": false,
                        "description": "\u0412\u0440\u0435\u043c\u044f \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438 \u043e\u0431\u044a\u0435\u043a\u0442\u0430, \u043f\u043e GMT.",
                        "type": "string"
                    },
                    "parent": {
                        "required": false,
                        "description": "ID \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "post": {
                        "required": false,
                        "description": "ID \u0430\u0441\u0441\u043e\u0446\u0438\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043a\u0442\u0430 \u0437\u0430\u043f\u0438\u0441\u0438.",
                        "type": "integer"
                    },
                    "status": {
                        "required": false,
                        "description": "\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "string"
                    },
                    "meta": {
                        "required": false,
                        "description": "\u041c\u0435\u0442\u0430 \u043f\u043e\u043b\u044f.",
                        "type": "object"
                    }
                }
            }, {
                "methods": ["DELETE"],
                "args": {
                    "id": {
                        "required": false,
                        "description": "\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u043a\u0442\u0430.",
                        "type": "integer"
                    },
                    "force": {
                        "required": false,
                        "default": false,
                        "description": "\u0418\u0433\u043d\u043e\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043b\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 \u0438 \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0434\u0430\u043b\u044f\u0442\u044c.",
                        "type": "boolean"
                    },
                    "password": {
                        "required": false,
                        "description": "\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043b\u044f \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f (\u0435\u0441\u043b\u0438 \u0437\u0430\u043f\u0438\u0441\u044c \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u0435\u043c).",
                        "type": "string"
                    }
                }
            }]
        },
        "\/wp\/v2\/settings": {
            "namespace": "wp\/v2",
            "methods": ["GET", "POST", "PUT", "PATCH"],
            "endpoints": [{
                "methods": ["GET"],
                "args": []
            }, {
                "methods": ["POST", "PUT", "PATCH"],
                "args": {
                    "title": {
                        "required": false,
                        "description": "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u0430.",
                        "type": "string"
                    },
                    "description": {
                        "required": false,
                        "description": "\u0421\u043b\u043e\u0433\u0430\u043d \u0441\u0430\u0439\u0442\u0430.",
                        "type": "string"
                    },
                    "url": {
                        "required": false,
                        "description": "\u0410\u0434\u0440\u0435\u0441 \u0441\u0430\u0439\u0442\u0430 (URL)",
                        "type": "string"
                    },
                    "email": {
                        "required": false,
                        "description": "\u042d\u0442\u043e\u0442 \u0430\u0434\u0440\u0435\u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u0446\u0435\u043b\u044f\u0445 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0434\u043b\u044f \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u043e \u043d\u043e\u0432\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u0445.",
                        "type": "string"
                    },
                    "timezone": {
                        "required": false,
                        "description": "\u0413\u043e\u0440\u043e\u0434 \u0432 \u0442\u043e\u0439 \u0436\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0437\u043e\u043d\u0435 \u0447\u0442\u043e \u0438 \u0443 \u0432\u0430\u0441.",
                        "type": "string"
                    },
                    "date_format": {
                        "required": false,
                        "description": "\u041e\u0431\u0449\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0434\u0430\u0442\u044b.",
                        "type": "string"
                    },
                    "time_format": {
                        "required": false,
                        "description": "\u041e\u0431\u0449\u0438\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0432\u0440\u0435\u043c\u0435\u043d\u0438.",
                        "type": "string"
                    },
                    "start_of_week": {
                        "required": false,
                        "description": "\u041f\u0435\u0440\u0432\u044b\u0439 \u0434\u0435\u043d\u044c \u043d\u0435\u0434\u0435\u043b\u0438.",
                        "type": "integer"
                    },
                    "language": {
                        "required": false,
                        "description": "\u041a\u043e\u0434 \u043b\u043e\u043a\u0430\u043b\u0438 WordPress.",
                        "type": "string"
                    },
                    "use_smilies": {
                        "required": false,
                        "description": "\u041f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0441\u043c\u0430\u0439\u043b\u0438\u043a\u0438 \u043d\u0430\u043f\u043e\u0434\u043e\u0431\u0438\u0435 :-) \u0438 :-P \u0432 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438 \u043f\u0440\u0438 \u043f\u043e\u043a\u0430\u0437\u0435.",
                        "type": "boolean"
                    },
                    "default_category": {
                        "required": false,
                        "description": "\u0420\u0443\u0431\u0440\u0438\u043a\u0430 \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.",
                        "type": "integer"
                    },
                    "default_post_format": {
                        "required": false,
                        "description": "\u0424\u043e\u0440\u043c\u0430\u0442 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e.",
                        "type": "string"
                    },
                    "posts_per_page": {
                        "required": false,
                        "description": "\u041c\u0430\u043a\u0441\u0438\u043c\u0443\u043c \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u0431\u043b\u043e\u0433\u0430 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430.",
                        "type": "integer"
                    },
                    "default_ping_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0438 \u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u044f \u0441 \u0434\u0440\u0443\u0433\u0438\u0445 \u0431\u043b\u043e\u0433\u043e\u0432 (\u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u0438 \u043e\u0431\u0440\u0430\u0442\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438) \u043d\u0430 \u043d\u043e\u0432\u044b\u0435 \u0441\u0442\u0430\u0442\u044c\u0438.",
                        "type": "string"
                    },
                    "default_comment_status": {
                        "required": false,
                        "enum": ["open", "closed"],
                        "description": "\u0420\u0430\u0437\u0440\u0435\u0448\u0438\u0442\u044c \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0443 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 \u043a \u043d\u043e\u0432\u044b\u043c \u0441\u0442\u0430\u0442\u044c\u044f\u043c.",
                        "type": "string"
                    }
                }
            }],
            "_links": {
                "self": "http:\/\/www.profibeton.com.ua\/wp-json\/wp\/v2\/settings"
            }
        }
    },
    "_links": {
        "help": [{
            "href": "http:\/\/v2.wp-api.org\/"
        }]
    }
}