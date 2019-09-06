# Weatherbit Code : Garden TOOLS

### Functions:
  - getWeather()
    - returns Humidity (%), Temperature (C and F), Wind Speed (), Wind Direction (), Rain (inches)
  - getSoil()
    - returns soil moisture ()
  - getWind()
    - returns Wind Speed () and Direction ()
  - getHumidity()
    - returns Humidity percentage
  - getTemp()
    - returns Temperature in C and F
  - getWindSpeed()
    - returns Wind Speed in 
  - getWindDirection()
    - returns Wind Direction

# Serial Connection
To connect a computer with the microbit, use a serial connection using the following steps:

**Windows**
1. Open Windows Device Manager and expand the section called “Ports (COM & LPT)”
2. Write down the com number for “mbed Serial Port” (e.g. COM14)
3. Download Putty (https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
4. Use the *Serial* Connection Type, The COM number written down in step 2 (e.g. COM14) for the serial line, and 115200 for the speed
5. Type in a name under Saved Sessions and click Save to save the configuration

**Linux**
1. Install the *screen* program if not already installed
2. Plug in the microbit
3. Open  the terminal
4. Type `ls /dev/ttyACM*`
5. Type the command `screen /dev/ttyACM0 115200` but replace the `0` in `ttyACM0` with what showed up after typing step 4
6. If this doesn't work, you may need root access. If you don't have root access, try prefixing your `screen` command with `sudo`
7. To exit the serial output, hit `Ctrl-A Ctrl-D`
 
**Mac OS**
1. Plug in the microbit
2. Open terminal
3. Type `ls /dev/cu.*` to return a list of serial devices
4. One of the devices from step 3 will look like `/dev/cu.usbmodem1422`. The exact number depends on your computer. `screen /dev/cu.usbmodem1422 115200` (where `/dev/cu.usbmodem1422` is the specific device your computer returned)
5. To exit the serial output, hit `Ctrl-A Ctrl-D`

# Possible Places to Go

### Measuring Soil Potential
[1][UMass Extension : Measuring Soil Moisture](https://link.springer.com/article/10.1007/BF00296702)
[2][Soil water potential measurement: An overview](https://link.springer.com/article/10.1007/BF00296702)

**Equation for calculating Soil Potential** -[2]
*Soil Potential (per unit mass) = (Matric Potential) + (Osmotic Potential) + (Pressure Potential) + (Gravitational Potential)*
 - **Pressure Potential** is measured by the gravitational constant (*g*) multiplied by the distance (*d*) between the point of measurement and the free water surface above.
 - **Gravitational Potential** is measured by the gravitational constant (*g*) multiplied by the distance (*d*) to a reference position
