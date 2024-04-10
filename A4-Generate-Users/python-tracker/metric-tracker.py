from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

async def extend_user_presence(driver, seconds):
    """
    Function to extend user presence time and display user time.
    """
    time.sleep(seconds)
    total_time = driver.execute_script('return new Date().toLocaleTimeString();')
    print(f'User time extended by {seconds} seconds. Current time: {total_time}')

async def check_for_student_keyword(driver):
    """
    Function to check if content contains keyword 'student'.
    """
    content = await driver.find_element(By.TAG_NAME, 'body').text
    if 'student' in content:
        print('Keyword "student" is found in the content')
        await extend_user_presence(driver, 10)
    else:
        print('Keyword "student" is NOT found in the content')

async def check_for_images(driver):
    """
    Function to check for image presence, display image name, and extend user presence time.
    """
    images = await driver.find_elements(By.TAG_NAME, 'img')
    for image in images:
        image_name = await image.get_attribute('src')
        print(f'Image found: {image_name}')
        await extend_user_presence(driver, 10)

async def check_for_links(driver):
    """
    Function to check for link presence, display link name, and extend user presence time.
    """
    links = await driver.find_elements(By.TAG_NAME, 'a')
    for link in links:
        link_name = await link.get_attribute('href')
        print(f'Link found: {link_name}')
        await extend_user_presence(driver, 10)

async def check_for_buttons(driver):
    """
    Function to check for any button presence, display button name, and extend user presence time.
    """
    button_elements = await driver.find_elements(By.TAG_NAME, 'button')
    if not button_elements:
        print('No buttons found')
    else:
        for button in button_elements:
            button_name = await button.text
            print(f'Button found with name: {button_name}')
            await extend_user_presence(driver, 10)

async def check_for_background_colors(driver):
    """
    Function to check for background color presence, display color name, and extend user presence time.
    """
    elements = await driver.find_elements(By.CSS_SELECTOR, '*')
    for element in elements:
        background_color = await element.value_of_css_property('background-color')
        print(f'Background color found: {background_color}')
        await extend_user_presence(driver, 10)

async def main():
    """
    Main function to check for keyword 'student', images, links, and background colors.
    """
    driver = webdriver.Chrome()
    try:
        await driver.get('http://localhost:3000')
        website_name = await driver.title
        print(f'Current website: {website_name}')

        await check_for_student_keyword(driver)
        await check_for_images(driver)
        await check_for_links(driver)
        await check_for_buttons(driver)
        await check_for_background_colors(driver)

    except Exception as e:
        print(e)
    finally:
        await driver.quit()

if __name__ == '__main__':
    asyncio.run(main())

