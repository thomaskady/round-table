CREATE TABLE user (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    phone_number VARCHAR UNIQUE NOT NULL,
    carrier VARCHAR NOT NULL
)

CREATE TABLE activity (
    activity_id SERIAL PRIMARY KEY,
    description VARCHAR NOT NULL,
    video_file VARCHAR NOT NULL,
    text_question VARCHAR,
    select_question VARCHAR
)

CREATE TABLE user_activity (
    user_id INT NOT NULL,
    activity_id INT NOT NULL,
    created_at TIME NOT NULL,
    text_response VARCHAR,
    select_response VARCHAR,
    video_response VARCHAR,
    PRIMARY KEY (user_id, activity_id),
    FOREIGN KEY (user_id)
        REFERENCES users (user_id),
    FOREIGN KEY (activity_id)
        REFERENCES activities (activity_id)
)